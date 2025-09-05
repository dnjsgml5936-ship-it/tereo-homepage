"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const PolicyFundingPage = () => {
  const fundingPrograms = [
    { name: '중소기업 기술개발사업', amount: '3억원', period: '2-3년', rate: '85%' },
    { name: '창업도약패키지', amount: '1억원', period: '2년', rate: '80%' },
    { name: '수출바우처', amount: '5천만원', period: '1년', rate: '80%' },
    { name: 'AI 도입지원사업', amount: '1억원', period: '1년', rate: '75%' }
  ];

  const benefits = [
    { icon: '💰', title: '최대 10억원', description: '사업별 최대 10억원까지 지원 가능' },
    { icon: '📈', title: '평균 85% 성공률', description: '업계 최고 수준의 높은 선정률' },
    { icon: '⚡', title: '빠른 처리', description: '신청부터 선정까지 신속한 진행' },
    { icon: '🎯', title: '맞춤형 매칭', description: '기업 특성에 최적화된 사업 매칭' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-purple-900 to-purple-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">정책자금 컨설팅</h1>
              <p className="text-xl mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                정부 지원사업 전문가와 함께<br />
                기업 성장에 필요한 자금을 확보하세요
              </p>
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors animate-fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                지원사업 매칭 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">주요 지원사업</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fundingPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{program.name}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">지원금액</span>
                      <span className="font-bold text-primary">{program.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">지원기간</span>
                      <span className="font-bold">{program.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">지원비율</span>
                      <span className="font-bold text-green-600">{program.rate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              정책자금 컨설팅의 장점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              지금 바로 정책자금을 확보하세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              전문가와 함께 기업에 최적화된 정부 지원사업을 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                지원사업 매칭 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:02-784-8272"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                전화 상담 02-784-8272
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default PolicyFundingPage;
