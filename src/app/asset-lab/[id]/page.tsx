import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Listing = {
  id: string;
  title: string;
  region: string;
  type: string;
  status: string;
  price: number;
  area: number;
  thumbnail: string;
  tags?: string[];
  description: string;
  address: string;
  lat?: number;
  lng?: number;
};

const SAMPLE: Listing[] = [
  { id: "L001", title: "여의도 파크뷰 오피스텔 고층 프리미엄", region: "서울", type: "오피스텔", status: "전세", price: 35000, area: 59, thumbnail: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop", tags: ["역세권","전망우수","신축"], description: "여의도 중심업무지구 내 신축 오피스텔 전세. 한강 조망, 풀옵션, 보안 우수.", address: "서울 영등포구 여의대로 00", lat: 37.524, lng: 126.927 },
  { id: "L002", title: "판교 테크밸리 근접 상가 1층 코너", region: "경기", type: "상가", status: "매매", price: 95000, area: 85, thumbnail: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop", tags: ["코너","집객력우수","투자용"], description: "판교 중심 상권 1층 코너 상가. 안정적 임차수요, 수익형 투자에 적합.", address: "경기 성남시 분당구 판교로 00" },
  { id: "L003", title: "송도 국제도시 업무용 사무실", region: "인천", type: "사무실", status: "월세", price: 450, area: 132, thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop", tags: ["즉시입주","주차편리"], description: "송도 국제업무지구 인근 사무실. 관리상태 우수, 분할 가능, 회의실 완비.", address: "인천 연수구 컨벤시아대로 00" },
  { id: "L004", title: "해운대 바다뷰 아파트 리모델링", region: "부산", type: "아파트", status: "매매", price: 165000, area: 84, thumbnail: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop", tags: ["바다뷰","리모델링"], description: "해운대 초입 바다 조망 최상. 올리모델링, 학군 양호, 생활편의시설 밀집.", address: "부산 해운대구 해운대로 00" },
  { id: "L005", title: "광교 신도시 중심 상업용 토지", region: "경기", type: "토지", status: "매매", price: 380000, area: 523, thumbnail: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop", tags: ["각지","개발호재"], description: "광교 중심 상업지 토지. 각지, 가시성 우수, 대형 개발 호재 예정.", address: "경기 수원시 영통구 광교중앙로 00" }
];

export function generateStaticParams() {
  return SAMPLE.map((s) => ({ id: s.id }));
}

export default async function AssetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const found = SAMPLE.find((x) => x.id === id);

  if (!found) return notFound();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[260px] bg-gray-900 text-white flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-sm text-white/80 mb-2"><Link href="/asset-lab" className="hover:underline">미래자산연구소</Link> / 상세</div>
            <h1 className="text-3xl md:text-4xl font-bold">{found.title}</h1>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow">
                <Image src={found.thumbnail} alt={found.title} fill className="object-cover" />
              </div>
              <div className="mt-6 bg-white rounded-lg shadow p-6 space-y-3">
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded">{found.region}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">{found.type}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">{found.area}m²</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">{found.status}</span>
                </div>
                <div className="text-2xl font-bold text-primary">{found.price.toLocaleString()} 만원</div>
                <p className="text-gray-700 leading-relaxed">{found.description}</p>
              </div>
            </div>
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold mb-4">매물 정보</h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><span className="w-16 inline-block text-gray-500">주소</span> {found.address}</div>
                  <div><span className="w-16 inline-block text-gray-500">유형</span> {found.type}</div>
                  <div><span className="w-16 inline-block text-gray-500">상태</span> {found.status}</div>
                  <div><span className="w-16 inline-block text-gray-500">면적</span> {found.area} m²</div>
                  <div><span className="w-16 inline-block text-gray-500">가격</span> {found.price.toLocaleString()} 만원</div>
                </div>
                <Link href="/contact/inquiry" className="mt-6 block w-full text-center bg-primary text-white py-3 rounded font-bold hover:bg-primary/90">문의하기</Link>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-56 bg-gray-200">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(found.address)}&z=14&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
