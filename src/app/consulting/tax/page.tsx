"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

const TaxConsultingPage = () => {
  const services = [
    {
      title: '법인세 절세 컨설팅',
      description: '기업의 세무 부담을 최소화하는 맞춤형 절세 전략을 수립합니다.',
      features: ['세무 리스크 분석', '절세 방안 제시', '세무 최적화 전략']
    },
    {
      title: '가지급금 정리',
      description: '법인과 개인 간의 가지급금을 안전하고 효율적으로 정리합니다.',
      features: ['현황 분석', '정리 방안 수립', '세무 리스크 최소화']
    },
    {
      title: '이익잉여금 활용',
      description: '기업의 이익잉여금을 효과적으로 활용하는 전략을 제공합니다.',
      features: ['활용 방안 분석', '배당 최적화', '세무 효율성 제고']
    },
    {
      title: '세무조사 대응',
      description: '세무조사 시 전문적인 대응으로 기업을 보호합니다.',
      features: ['사전 준비', '조사 동행', '사후 관리']
    }
  ];

  const benefits = [
    { icon: '💰', title: '평균 30% 절세', description: '체계적인 세무 전략으로 세금 부담 최소화' },
    { icon: '🛡️', title: '리스크 예방', description: '세무 리스크 사전 발견 및 예방' },
    { icon: '📋', title: '전문가 관리', description: '세무사 1:1 전담 관리 서비스' },
    { icon: '📞', title: '24시간 지원', description: '세무 관련 긴급 상황 즉시 대응' }
  ];

  const process = [
    { step: '01', title: '세무 진단', description: '현재 세무 상황 정밀 분석' },
    { step: '02', title: '전략 수립', description: '맞춤형 절세 전략 개발' },
    { step: '03', title: '실행 지원', description: '전략 실행 및 모니터링' },
    { step: '04', title: '사후 관리', description: '지속적인 세무 최적화 관리' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">세무 컨설팅</h1>
              <p className="text-xl mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                전문적인 세무 전략으로 기업의 세금 부담을 최소화하고<br />
                안정적인 세무 관리 체계를 구축합니다
              </p>
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors animate-fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                무료 세무 진단 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">세무 컨설팅 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              세무 컨설팅의 효과
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

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">컨설팅 프로세스</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">성공 사례</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeInUp">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">A 제조업체 절세 사례</h3>
                    <p className="text-gray-600 mb-6">
                      연 매출 100억원 규모의 제조업체가 테레오의 세무 컨설팅을 통해
                      연간 3억원의 절세 효과를 거둔 사례입니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">컨설팅 이전 세금</span>
                        <span className="font-bold text-red-600">10억원</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">컨설팅 이후 세금</span>
                        <span className="font-bold text-green-600">7억원</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-4">
                        <span className="text-gray-700 font-bold">절세 효과</span>
                        <span className="font-bold text-primary text-xl">3억원 (30%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="세무 컨설팅 성공 사례"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              지금 바로 세무 부담을 줄여보세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              무료 세무 진단을 통해 절세 가능성을 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                무료 세무 진단 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:02-784-8272"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
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

export default TaxConsultingPage;
