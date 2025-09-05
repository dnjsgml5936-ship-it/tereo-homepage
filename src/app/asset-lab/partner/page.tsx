"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

type FormType = { company: string; name: string; phone: string; email: string; category: string; note: string };

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormType>({ company: "", name: "", phone: "", email: "", category: "", note: "" });
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="h-[260px] bg-gradient-to-r from-blue-700 to-sky-600 text-white flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">업무제휴</h1>
            <p className="text-white/90 mt-2">기업/기관과의 상생 제휴를 환영합니다</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6 relative overflow-hidden">
              <h2 className="font-bold text-xl mb-4">제휴 문의</h2>
              {submitted ? (
                <div className="text-green-700">접수되었습니다. 담당자가 곧 연락드리겠습니다.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(
                    [
                      { k: "company", l: "회사/기관명" },
                      { k: "name", l: "담당자명" },
                      { k: "phone", l: "연락처" },
                      { k: "email", l: "이메일" },
                      { k: "category", l: "분류" },
                    ] as const
                  ).map(({ k, l }) => (
                    <div key={k} className="flex flex-col">
                      <label className="text-sm text-gray-600 mb-1">{l}</label>
                      <input
                        value={String(form[k])}
                        onChange={(e)=>setForm({ ...form, [k]: e.target.value } as typeof form)}
                        className="px-3 py-2 border rounded bg-white/90"
                        placeholder={k === 'category' ? '중개사무소 / 중개법인 / 컨설턴트 / 기타' : ''}
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1">제휴 제안 내용</label>
                    <textarea
                      value={form.note}
                      onChange={(e)=>setForm({ ...form, note: e.target.value })}
                      className="w-full h-32 px-3 py-2 border rounded bg-white/90"
                      placeholder=""
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button onClick={()=>setSubmitted(true)} className="w-full bg-primary text-white py-3 rounded font-bold">접수하기</button>
                  </div>
                </div>
              )}
            </div>
            <aside className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-3">안내</h3>
              <p className="text-sm text-gray-600">공동 마케팅, 매물 제휴, 컨설팅 연계 등 다양한 협업 모델을 제시드립니다.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
