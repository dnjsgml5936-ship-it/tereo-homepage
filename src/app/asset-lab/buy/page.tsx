"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

type FormType = { name: string; phone: string; region: string; type: string; budget: string; note: string };

export default function BuyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormType>({ name: "", phone: "", region: "", type: "아파트", budget: "", note: "" });
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="h-[260px] bg-gradient-to-r from-emerald-700 to-green-600 text-white flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">매수문의</h1>
            <p className="text-white/90 mt-2">구매/투자 목적에 맞춘 맞춤 매물 제안</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="font-bold text-xl mb-4">요청 정보</h2>
              {submitted ? (
                <div className="text-green-700">접수되었습니다. 맞춤 매물을 준비해 연락드리겠습니다.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(
                    [
                      { k: "name", l: "성함" },
                      { k: "phone", l: "연락처" },
                      { k: "region", l: "희망지역" },
                      { k: "type", l: "유형" },
                      { k: "budget", l: "예산(만원)" },
                    ] as const
                  ).map(({ k, l }) => (
                    <div key={k} className="flex flex-col">
                      <label className="text-sm text-gray-600 mb-1">{l}</label>
                      <input
                        value={String(form[k])}
                        onChange={(e)=>setForm({ ...form, [k]: e.target.value } as typeof form)}
                        className="px-3 py-2 border rounded"
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1">추가 조건</label>
                    <textarea value={form.note} onChange={(e)=>setForm({ ...form, note: e.target.value })} className="w-full h-32 px-3 py-2 border rounded" />
                  </div>
                  <div className="md:col-span-2">
                    <button onClick={()=>setSubmitted(true)} className="w-full bg-primary text-white py-3 rounded font-bold">접수하기</button>
                  </div>
                </div>
              )}
            </div>
            <aside className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-3">안내</h3>
              <p className="text-sm text-gray-600">요청하신 예산과 지역, 유형을 기준으로 최적의 매물을 제안드립니다.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
