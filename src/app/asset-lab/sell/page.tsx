"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

type FormType = {
  name: string;
  phone: string;
  region: string;
  type: string;
  price: string;
  note: string;
};

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormType>({ name: "", phone: "", region: "", type: "아파트", price: "", note: "" });
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="h-[260px] bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">매도문의</h1>
            <p className="text-white/80 mt-2">보유 자산 판매를 위한 전문가 상담</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="font-bold text-xl mb-4">기본 정보</h2>
              {submitted ? (
                <div className="text-green-700">접수되었습니다. 담당자가 곧 연락드립니다.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(
                    [
                      { k: "name", l: "성함" },
                      { k: "phone", l: "연락처" },
                      { k: "region", l: "지역" },
                      { k: "type", l: "유형" },
                      { k: "price", l: "희망가(만원)" },
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
                    <label className="text-sm text-gray-600 mb-1">추가 메모</label>
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
              <p className="text-sm text-gray-600">제출하신 정보는 오직 상담 목적으로만 사용됩니다.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
