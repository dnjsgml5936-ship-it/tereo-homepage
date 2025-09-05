"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

const CREDENTIAL = { id: "tereo", pw: "tereobiz!!" } as const;

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
};

export default function AssetAdminPage() {
  const [authed, setAuthed] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<Omit<Listing, 'tags'> & { tags: string }>({
    id: "",
    title: "",
    region: "서울",
    type: "아파트",
    status: "매매",
    price: 0,
    area: 0,
    thumbnail: "",
    tags: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("tereo-assetlab-token");
    if (token === "ok") setAuthed(true);
  }, []);

  const login = () => {
    if (id === CREDENTIAL.id && pw === CREDENTIAL.pw) {
      sessionStorage.setItem("tereo-assetlab-token", "ok");
      setAuthed(true);
      setMessage("");
    } else {
      setMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const save = () => {
    if (!form.id || !form.title) {
      setMessage("매물 ID와 제목은 필수입니다.");
      return;
    }
    const raw = localStorage.getItem("tereo-extra-listings");
    const list: Listing[] = raw ? (JSON.parse(raw) as Listing[]) : [];
    const toSave: Listing = {
      ...form,
      tags: form.tags ? form.tags.split(",").map((s) => s.trim()) : [],
      price: Number(form.price) || 0,
      area: Number(form.area) || 0,
    } as unknown as Listing;
    list.unshift(toSave);
    localStorage.setItem("tereo-extra-listings", JSON.stringify(list));
    setMessage("저장되었습니다. 목록에서 확인하세요.");
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[220px] bg-gray-900 text-white flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">미래자산연구소 관리자</h1>
            <p className="text-white/80 mt-2">간단 등록: 정적 환경용 데모</p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            {!authed ? (
              <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl mb-4">로그인</h2>
                <div className="space-y-3">
                  <input value={id} onChange={(e)=>setId(e.target.value)} placeholder="아이디" className="w-full px-3 py-2 border rounded" />
                  <input value={pw} onChange={(e)=>setPw(e.target.value)} type="password" placeholder="비밀번호" className="w-full px-3 py-2 border rounded" />
                  {message && <div className="text-red-600 text-sm">{message}</div>}
                  <button onClick={login} className="w-full bg-primary text-white py-2 rounded font-bold">로그인</button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                  <h2 className="font-bold text-xl mb-4">매물 등록</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(["id","title","region","type","status","price","area","thumbnail","tags","address"] as const).map((k) => (
                      <div key={k} className="flex flex-col">
                        <label className="text-sm text-gray-600 mb-1">{k}</label>
                        <input
                          value={String(form[k as keyof typeof form] as unknown as string)}
                          onChange={(e)=>{
                            const v = (k === 'price' || k === 'area') ? Number(e.target.value) : e.target.value;
                            setForm(prev => ({ ...prev, [k]: v }));
                          }}
                          className="px-3 py-2 border rounded"
                        />
                      </div>
                    ))}
                    <div className="md:col-span-2">
                      <label className="text-sm text-gray-600 mb-1">description</label>
                      <textarea value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} className="w-full h-32 px-3 py-2 border rounded" />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={save} className="px-5 py-2 bg-primary text-white rounded font-bold">저장</button>
                    <Link href="/asset-lab" className="px-5 py-2 bg-gray-200 rounded">목록 보기</Link>
                  </div>
                  {message && <div className="mt-3 text-green-700">{message}</div>}
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold mb-2">안내</h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>이 데모는 정적 사이트 환경을 고려하여 localStorage를 사용합니다.</li>
                    <li>실서비스에서는 DB와 인증 서버 연동이 필요합니다.</li>
                    <li>tags는 쉼표(,)로 구분하여 입력하세요.</li>
                  </ul>
                </div>
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
