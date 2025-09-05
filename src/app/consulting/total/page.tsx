"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

const TotalConsultingPage = () => {
  const services = [
    {
      title: '경영전략 수립',
      description: '기업의 비전과 목표에 맞는 체계적인 경영전략을 수립합니다.',
      features: ['비전 및 미션 설정', '중장기 전략 수립', '성장 로드맵 개발'],
      icon: '🎯'
    },
    {
      title: '조직 최적화',
      description: '효율적인 조직 구조와 업무 프로세스를 설계합니다.',
      features: ['조직 구조 개선', '업무 프로세스 최적화', '인력 배치 전략'],
      icon: '🏗️'
    },
    {
      title: '재무 관리',
      description: '건전한 재무 구조와 자금 운용 전략을 제공합니다.',
      features: ['재무 분석 및 진단', '자금 조달 전략', '투자 계획 수립'],
      icon: '💼'
    },
    {
      title: '마케팅 전략',
      description: '시장 분석을 통한 효과적인 마케팅 전략을 개발합니다.',
      features: ['시장 분석', '브랜딩 전략', '고객 확보 방안'],
      icon: '📈'
    },
    {
      title: '디지털 전환',
      description: '디지털 시대에 맞는 비즈니스 모델로의 전환을 지원합니다.',
      features: ['디지털화 전략', 'IT 인프라 구축', '업무 자동화'],
      icon: '💻'
    },
    {
      title: '성과 관리',
      description: '목표 달성을 위한 체계적인 성과 관리 시스템을 구축합니다.',
      features: ['KPI 설정', '성과 평가 체계', '인센티브 설계'],
      icon: '📊'
    }
  ];

  const benefits = [
    { value: '25%', label: '매출 증가', description: '체계적인 경영 전략으로 평균 매출 25% 증가' },
    { value: '40%', label: '효율성 개선', description: '업무 프로세스 최적화로 운영 효율성 40% 향상' },
    { value: '50%', label: '비용 절감', description: '조직 최적화를 통한 운영 비용 50% 절감' },
    { value: '90%', label: '만족도', description: '고객사 90% 이상의 높은 만족도 달성' }
  ];

  const process = [
    {
      step: '01',
      title: '현황 진단',
      description: '기업의 현재 상황을 종합적으로 분석하고 진단합니다.',
      details: ['경영 환경 분석', '내부 역량 평가', '문제점 도출']
    },
    {
      step: '02',
      title: '전략 수립',
      description: '진단 결과를 바탕으로 맞춤형 전략을 수립합니다.',
      details: ['목표 설정', '전략 개발', '실행 계획 수립']
    },
    {
      step: '03',
      title: '실행 지원',
      description: '전략 실행을 위한 구체적인 지원을 제공합니다.',
      details: ['변화 관리', '교육 및 훈련', '실행 모니터링']
    },
    {
      step: '04',
      title: '성과 관리',
      description: '지속적인 성과 관리와 개선 방안을 제시합니다.',
      details: ['성과 평가', '개선 방안', '지속적 지원']
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-green-900 to-green-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">종합 컨설팅</h1>
              <p className="text-xl mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                기업의 모든 영역을 아우르는 토탈 비즈니스 솔루션으로<br />
                지속가능한 성장과 경쟁력 강화를 실현합니다
              </p>
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center gap-3 bg-white text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors animate-fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                종합 진단 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">종합 컨설팅 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
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
              종합 컨설팅의 효과
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.label}</h3>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">성공 사례</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeInUp">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">B 유통업체 혁신 사례</h3>
                  <p className="text-gray-600 mb-6">
                    전통적인 오프라인 유통업체가 디지털 전환을 통해 새로운 성장동력을 확보한 사례입니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">디지털 전환 이전 매출</span>
                      <span className="font-bold">50억원</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">디지털 전환 이후 매출</span>
                      <span className="font-bold text-green-600">75억원</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">운영 효율성 개선</span>
                      <span className="font-bold text-primary">45% 향상</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">C 제조업체 조직 혁신</h3>
                  <p className="text-gray-600 mb-6">
                    조직 구조 개편과 프로세스 혁신을 통해 생산성을 대폭 향상시킨 사례입니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">생산성 향상</span>
                      <span className="font-bold text-green-600">60% 증가</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">품질 개선</span>
                      <span className="font-bold text-primary">불량률 80% 감소</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">직원 만족도</span>
                      <span className="font-bold">90% 향상</span>
                    </div>
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
              기업의 모든 영역을 혁신하세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              종합 컨설팅으로 지속가능한 성장의 기반을 마련하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                종합 진단 신청
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

export default TotalConsultingPage;
