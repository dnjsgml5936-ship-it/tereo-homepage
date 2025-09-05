"use client";

import React, { useMemo, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import Image from "next/image";

type Listing = {
  id: string;
  title: string;
  region: string; // 서울/경기/인천/부산 등
  type: "아파트" | "오피스텔" | "상가" | "토지" | "사무실";
  status: "매매" | "전세" | "월세";
  price: number; // 만원 단위
  area: number; // m2
  thumbnail: string;
  tags?: string[];
  description: string;
  address: string;
  lat?: number;
  lng?: number;
};

const SAMPLE_LIST: Listing[] = [
  {
    id: "L001",
    title: "여의도 파크뷰 오피스텔 고층 프리미엄",
    region: "서울",
    type: "오피스텔",
    status: "전세",
    price: 35000,
    area: 59,
    thumbnail:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
    tags: ["역세권", "전망우수", "신축"],
    description:
      "여의도 중심업무지구 내 신축 오피스텔 전세. 한강 조망, 풀옵션, 보안 우수.",
    address: "서울 영등포구 여의대로 00",
    lat: 37.524, lng: 126.927
  },
  {
    id: "L002",
    title: "판교 테크밸리 근접 상가 1층 코너",
    region: "경기",
    type: "상가",
    status: "매매",
    price: 95000,
    area: 85,
    thumbnail:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop",
    tags: ["코너", "집객력우수", "투자용"],
    description:
      "판교 중심 상권 1층 코너 상가. 안정적 임차수요, 수익형 투자에 적합.",
    address: "경기 성남시 분당구 판교로 00"
  },
  {
    id: "L003",
    title: "송도 국제도시 업무용 사무실",
    region: "인천",
    type: "사무실",
    status: "월세",
    price: 450,
    area: 132,
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    tags: ["즉시입주", "주차편리"],
    description:
      "송도 국제업무지구 인근 사무실. 관리상태 우수, 분할 가능, 회의실 완비.",
    address: "인천 연수구 컨벤시아대로 00"
  },
  {
    id: "L004",
    title: "해운대 바다뷰 아파트 리모델링",
    region: "부산",
    type: "아파트",
    status: "매매",
    price: 165000,
    area: 84,
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    tags: ["바다뷰", "리모델링"],
    description:
      "해운대 초입 바다 조망 최상. 올리모델링, 학군 양호, 생활편의시설 밀집.",
    address: "부산 해운대구 해운대로 00"
  },
  {
    id: "L005",
    title: "광교 신도시 중심 상업용 토지",
    region: "경기",
    type: "토지",
    status: "매매",
    price: 380000,
    area: 523,
    thumbnail:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
    tags: ["각지", "개발호재"],
    description:
      "광교 중심 상업지 토지. 각지, 가시성 우수, 대형 개발 호재 예정.",
    address: "경기 수원시 영통구 광교중앙로 00"
  }
];

const regions = ["전체", "서울", "경기", "인천", "부산"] as const;
const types = ["전체", "아파트", "오피스텔", "상가", "토지", "사무실"] as const;
const statuses = ["전체", "매매", "전세", "월세"] as const;

// helper types for UI handlers
type Region = typeof regions[number];
type RType = typeof types[number];
type Status = typeof statuses[number];

export default function AssetLabPage() {
  const [region, setRegion] = useState<Region>("전체");
  const [rtype, setRtype] = useState<RType>("전체");
  const [status, setStatus] = useState<Status>("전체");
  const [q, setQ] = useState<string>("");
  const [minP, setMinP] = useState<number>(0);
  const [maxP, setMaxP] = useState<number>(0);

  const [extra, setExtra] = useState<Listing[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem("tereo-extra-listings");
    if (raw) {
      try { setExtra(JSON.parse(raw) as Listing[]); } catch {}
    }
  }, []);

  const list = useMemo(() => {
    const merged: Listing[] = [...extra, ...SAMPLE_LIST];
    return merged.filter((it) => {
      if (region !== "전체" && it.region !== region) return false;
      if (rtype !== "전체" && it.type !== rtype) return false;
      if (status !== "전체" && it.status !== status) return false;
      if (minP && it.price < minP) return false;
      if (maxP && it.price > maxP) return false;
      if (q) {
        const t = (it.title + it.description + it.address).toLowerCase();
        if (!t.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [region, rtype, status, q, minP, maxP, extra]);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[320px] bg-gradient-to-r from-emerald-700 to-green-600 flex items-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">미래자산연구소</h1>
            <p className="text-lg opacity-90">테레오가 엄선한 프리미엄 부동산 매물을 한 곳에서 확인하세요</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-gray-50 sticky top-20 z-30 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <div className="flex gap-2">
                <select value={region} onChange={(e)=>setRegion(e.target.value as Region)} className="px-3 py-2 bg-white border rounded-md">
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <select value={rtype} onChange={(e)=>setRtype(e.target.value as RType)} className="px-3 py-2 bg-white border rounded-md">
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <select value={status} onChange={(e)=>setStatus(e.target.value as Status)} className="px-3 py-2 bg-white border rounded-md">
                  {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex gap-2 items-center">
                <input type="number" placeholder="최소가(만원)" value={minP||""} onChange={(e)=>setMinP(Number(e.target.value)||0)} className="px-3 py-2 bg-white border rounded-md w-36" />
                <span className="text-gray-500">~</span>
                <input type="number" placeholder="최대가(만원)" value={maxP||""} onChange={(e)=>setMaxP(Number(e.target.value)||0)} className="px-3 py-2 bg-white border rounded-md w-36" />
              </div>
              <div className="flex-1" />
              <div className="flex gap-2">
                <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="검색어 (제목, 설명, 주소)" className="px-3 py-2 bg-white border rounded-md w-64" />
                <Link href="/asset-lab/admin" className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-primary">로그인</Link>
              </div>
            </div>
          </div>
        </section>

        {/* List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {list.length === 0 ? (
              <div className="text-center text-gray-600 py-20">조건에 맞는 매물이 없습니다.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((item) => (
                  <Link key={item.id} href={`/asset-lab/${item.id}`} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="relative h-48">
                      <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.tags?.slice(0,2).map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs bg-black/60 text-white rounded">{tag}</span>
                        ))}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 text-xs bg-white/90 rounded font-bold">
                        {item.status}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>
                      <div className="text-primary font-bold mb-2">{item.price.toLocaleString()} 만원</div>
                      <div className="text-sm text-gray-600 flex gap-3">
                        <span>{item.region}</span>
                        <span>{item.type}</span>
                        <span>{item.area}m²</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
