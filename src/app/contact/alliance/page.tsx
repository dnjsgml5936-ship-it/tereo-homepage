"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const AlliancePage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    partnershipType: '',
    businessField: '',
    message: ''
  });

  const partnershipTypes = [
    '컨설팅 협력사',
    '기술 파트너',
    '마케팅 제휴',
    '교육/세미나 협력',
    '기타'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('제휴 문의가 접수되었습니다. 담당자가 빠른 시일 내에 연락드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-indigo-900 to-indigo-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">제휴 문의</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              테레오와 함께 성장할 파트너를 찾습니다
            </p>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              파트너십의 이점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fadeInUp">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">상호 성장</h3>
                <p className="text-gray-600">
                  전국 네트워크와 노하우를 공유하여<br />
                  함께 성장하는 파트너십을 구축합니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">신뢰성 향상</h3>
                <p className="text-gray-600">
                  테레오의 브랜드 가치와 전문성으로<br />
                  파트너사의 신뢰도를 높입니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">수익 창출</h3>
                <p className="text-gray-600">
                  다양한 협력 모델을 통해<br />
                  새로운 수익 기회를 창출합니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              제휴 분야
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">컨설팅 협력</h3>
                <p className="text-gray-600">
                  세무, 노무, 법무 등 전문 분야별 협력사 모집
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3">기술 파트너</h3>
                <p className="text-gray-600">
                  IT 솔루션, 시스템 개발 등 기술 협력사 모집
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-xl font-bold mb-3">마케팅 제휴</h3>
                <p className="text-gray-600">
                  공동 마케팅, 고객 추천 등 마케팅 파트너 모집
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">교육 협력</h3>
                <p className="text-gray-600">
                  세미나, 교육 프로그램 공동 운영 파트너 모집
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alliance Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                제휴 신청서
              </h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      직책
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      제휴 희망 분야 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">선택해주세요</option>
                      {partnershipTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    사업 분야
                  </label>
                  <input
                    type="text"
                    name="businessField"
                    value={formData.businessField}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="주요 사업 분야를 입력해주세요"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    제휴 제안 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="구체적인 제휴 제안 내용을 작성해주세요"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 제휴 검토 목적으로만 사용되며,
                      검토 완료 후 안전하게 폐기됩니다.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  제휴 신청하기
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">제휴 문의</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl">02-784-8272</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xl">partnership@tereo.co.kr</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default AlliancePage;
