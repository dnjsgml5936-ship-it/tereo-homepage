"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: '세무 컨설팅',
      icon: '💰',
      description: '체계적인 세무 전략으로 기업의 세금 부담을 최적화하고 세무 리스크를 최소화합니다',
      features: [
        '법인세·소득세 절세 전략 수립',
        '가지급금 정리 및 세무조사 대비',
        '이익잉여금 활용 최적화 방안',
        '부가가치세 환급 및 신고 지원',
        '상속·증여세 절세 플랜',
        '세무조사 대응 및 불복 절차'
      ],
      benefits: [
        '연평균 30~50% 세금 절감',
        '세무 리스크 90% 이상 예방',
        '세무사 전담 관리 시스템',
        '24시간 세무 상담 핫라인'
      ]
    },
    {
      id: 1,
      title: '가업승계 컨설팅',
      icon: '🏢',
      description: '3세대 기업 성장을 위한 체계적인 경영권 승계와 가족 거버넌스를 구축합니다',
      features: [
        '가업승계 마스터플랜 설계',
        '상속·증여세 최적화 전략',
        '지분구조 재편 및 경영권 이전',
        '가업상속공제 최대 활용 방안',
        '후계자 육성 프로그램',
        '가족헌법 및 지배구조 구축'
      ],
      benefits: [
        '승계세 최대 90% 절감',
        '3년 내 안정적 승계 완료',
        '가족 갈등 사전 차단',
        '후계 경영진 역량 강화'
      ]
    },
    {
      id: 2,
      title: '기업인증 컨설팅',
      icon: '📊',
      description: '글로벌 경쟁력 강화를 위한 필수 인증 취득과 기업 브랜드 가치를 극대화합니다',
      features: [
        'ISO 9001/14001/45001 품질·환경·안전 인증',
        '벤처기업·이노비즈·메인비즈 혁신기업 인증',
        '기업부설연구소·연구개발전담부서 설립',
        'K-ESG·탄소중립 녹색인증',
        '여성기업·사회적기업 특수인증',
        '수출기업 국제표준 인증'
      ],
      benefits: [
        '정부사업 참여 우선권 확보',
        '기업 신뢰도 200% 향상',
        '세제 혜택 연 5억원 이상',
        '해외 진출 경쟁력 강화'
      ]
    },
    {
      id: 3,
      title: '정책자금 컨설팅',
      icon: '💵',
      description: '연간 2,000여 개 정부지원사업 중 기업 맞춤형 자금을 확보하여 성장 동력을 제공합니다',
      features: [
        'AI 기반 맞춤형 사업 매칭 시스템',
        'R&D·기술개발 과제 전담 지원',
        '창업·벤처 특화 지원사업',
        '수출·해외진출 바우처 사업',
        '디지털뉴딜·탄소중립 신사업',
        '지역특화·상생협력 프로그램'
      ],
      benefits: [
        '업계 최고 선정률 92%',
        '연간 최대 30억원 지원 확보',
        '전담 PM 1:1 밀착 관리',
        '사후관리 무료 3년 제공'
      ]
    },
    {
      id: 4,
      title: '노무 컨설팅',
      icon: '👥',
      description: '급변하는 노동환경에 대응하는 스마트 인사관리 시스템으로 기업과 직원 모두 만족하는 조직을 만듭니다',
      features: [
        '근로기준법 완전 준수 시스템 구축',
        '취업규칙·인사규정 최신화',
        '4대보험·퇴직연금 통합 관리',
        '임금체계 개편 및 성과평가',
        '직장 내 괴롭힘·성희롱 예방',
        '노사분쟁 조정 및 근로감독 대응'
      ],
      benefits: [
        '노무 리스크 95% 제거',
        '고용지원금 연 2억원 확보',
        '공인노무사 월 2회 방문',
        '24시간 노무 상담 지원'
      ]
    },
    {
      id: 5,
      title: '경영자문 컨설팅',
      icon: '📈',
      description: '글로벌 시장에서 경쟁우위를 확보하는 차세대 경영전략과 디지털 혁신으로 기업가치를 극대화합니다',
      features: [
        '비전 2030 중장기 경영전략 수립',
        'ESG 경영 및 지속가능경영 체계',
        '디지털 트랜스포메이션 전략',
        'M&A·투자유치·IPO 자문',
        '글로벌 진출 및 해외법인 설립',
        '조직문화 혁신 및 인재경영'
      ],
      benefits: [
        '기업가치 평균 300% 향상',
        '매출 성장률 50% 이상 달성',
        '운영 효율성 60% 개선',
        'C-Level 전용 자문단 운영'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-green-600 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">서비스 소개</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              테레오의 전문 컨설팅 서비스로 기업의 성장을 가속화하세요
            </p>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all animate-fadeInUp hover-lift ${
                    activeService === index
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="animate-fadeInLeft">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  {services[activeService].title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {services[activeService].description}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">주요 서비스</h3>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">기대 효과</h3>
                  <ul className="space-y-2">
                    {services[activeService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="text-primary">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative h-[500px] animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
                <Image
                  src={`https://images.unsplash.com/photo-${
                    activeService === 0 ? '1554224155-740292b8b885' :
                    activeService === 1 ? '1600880292203-757bb62b4baf' :
                    activeService === 2 ? '1553028826-64b86e66a1' :
                    activeService === 3 ? '1559526324-4b3c32ab4055' :
                    activeService === 4 ? '1521737604893-d14cc3f7ee5d' :
                    '1460925418-b89363016140'
                  }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt={services[activeService].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">컨설팅 프로세스</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: '상담 신청', desc: '온라인 또는 전화로 간편하게 신청' },
                { step: '02', title: '현황 분석', desc: '전문가가 기업 현황을 정밀 진단' },
                { step: '03', title: '솔루션 제안', desc: '맞춤형 컨설팅 방안 제시' },
                { step: '04', title: '실행 및 관리', desc: '지속적인 사후관리 서비스' }
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              지금 바로 전문가 상담을 받아보세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              테레오의 85,000건 이상의 컨설팅 노하우로 성공을 앞당기세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 font-bold hover:bg-primary/90 transition-colors"
              >
                무료 상담 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:15330717"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1533-0717
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServicesPage;
