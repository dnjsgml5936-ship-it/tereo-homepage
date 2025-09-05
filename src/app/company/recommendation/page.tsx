"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const RecommendationPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [companySize, setCompanySize] = useState('');

  const industries = [
    '제조업', 'IT/소프트웨어', '도소매업', '건설업',
    '서비스업', '의료/바이오', '물류/운송', '기타'
  ];

  const services = [
    '세무컨설팅', '가업승계', '기업인증',
    '정책자금', '노무관리', '경영자문'
  ];

  const companySizes = [
    '1-10명', '11-50명', '51-100명', '100명 이상'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('전문가 매칭을 위한 정보가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-green-600 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">추천시스템</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              기업 맞춤형 전문가 매칭 서비스
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              어떻게 작동하나요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-fadeInUp">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">정보 입력</h3>
                <p className="text-gray-600">
                  업종, 규모, 필요 서비스 등<br />
                  기본 정보를 입력합니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">전문가 매칭</h3>
                <p className="text-gray-600">
                  AI 기반 알고리즘으로<br />
                  최적의 전문가를 매칭합니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">상담 진행</h3>
                <p className="text-gray-600">
                  매칭된 전문가와<br />
                  1:1 맞춤 상담을 진행합니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">솔루션 제공</h3>
                <p className="text-gray-600">
                  기업에 최적화된<br />
                  맞춤형 솔루션을 제공합니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                전문가 추천받기
              </h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                {/* Industry Selection */}
                <div className="mb-8">
                  <label className="block text-lg font-bold mb-4 text-gray-800">
                    업종을 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        type="button"
                        onClick={() => setSelectedIndustry(industry)}
                        className={`py-3 px-4 border-2 rounded-lg transition-all ${
                          selectedIndustry === industry
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="mb-8">
                  <label className="block text-lg font-bold mb-4 text-gray-800">
                    필요한 서비스를 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`py-3 px-4 border-2 rounded-lg transition-all ${
                          selectedService === service
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company Size */}
                <div className="mb-8">
                  <label className="block text-lg font-bold mb-4 text-gray-800">
                    기업 규모를 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {companySizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setCompanySize(size)}
                        className={`py-3 px-4 border-2 rounded-lg transition-all ${
                          companySize === size
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">연락처 정보</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="회사명"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="담당자명"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="연락처"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="이메일"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div className="mb-8">
                  <label className="block text-lg font-bold mb-4 text-gray-800">
                    추가 요청사항
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="구체적인 상담 내용이나 요청사항을 입력해주세요"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  전문가 추천받기
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              추천시스템의 장점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">빠른 매칭</h3>
                <p className="text-gray-600">
                  24시간 이내 최적의 전문가와 연결해드립니다
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">정확한 매칭</h3>
                <p className="text-gray-600">
                  AI 알고리즘으로 가장 적합한 전문가를 찾아드립니다
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4">비용 절감</h3>
                <p className="text-gray-600">
                  불필요한 상담 과정을 줄여 시간과 비용을 절약합니다
                </p>
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

export default RecommendationPage;
