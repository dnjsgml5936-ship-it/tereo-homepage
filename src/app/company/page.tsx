"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

const CompanyPage = () => {
  const milestones = [
    { year: '2007', title: '테레오 설립', description: '기업 컨설팅 서비스 시작' },
    { year: '2010', title: '전국 지사 확대', description: '서울, 부산, 대구 지사 개설' },
    { year: '2015', title: '누적 컨설팅 50,000건 달성', description: '중소기업 성장 파트너로 자리매김' },
    { year: '2020', title: '디지털 전환 컨설팅 시작', description: '포스트 코로나 시대 대응' },
    { year: '2024', title: '누적 컨설팅 85,000건 달성', description: '대한민국 No.1 기업 컨설팅 그룹' }
  ];

  const values = [
    {
      icon: '🎯',
      title: '전문성',
      description: '각 분야 최고의 전문가들이 제공하는 맞춤형 솔루션'
    },
    {
      icon: '🤝',
      title: '신뢰',
      description: '투명하고 정직한 소통으로 쌓아온 고객과의 신뢰'
    },
    {
      icon: '💡',
      title: '혁신',
      description: '변화하는 시대에 맞춘 창의적이고 혁신적인 컨설팅'
    },
    {
      icon: '🌱',
      title: '성장',
      description: '고객사와 함께 성장하는 동반자 관계 구축'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">회사소개</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              테레오와 함께 성장하는 기업의 미래
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInLeft">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  기업의 성공을 위한<br />
                  <span className="text-primary">최고의 파트너</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  주식회사 테레오는 2007년 설립 이래 85,000여 개의 기업과 함께 성장해왔습니다.
                  세무, 노무, 법무, 인증, 정책자금, 연구개발 등 기업 경영에 필요한 모든 분야의
                  전문 컨설팅을 제공하며, 대한민국 중소기업의 든든한 성장 파트너로 자리매김했습니다.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  전국 22개 지사에서 각 분야 최고의 전문가들이 고객사의 성공을 위해
                  맞춤형 솔루션을 제공하고 있으며, 컨설팅 이후에도 지속적인 사후관리로
                  고객사의 안정적인 성장을 지원합니다.
                </p>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">85,000+</div>
                    <div className="text-gray-600">누적 컨설팅</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">22</div>
                    <div className="text-gray-600">전국 지사</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-600">전문 컨설턴트</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="테레오 팀"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 text-center hover:shadow-lg transition-shadow animate-scaleIn hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">회사 연혁</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-8 mb-12 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="relative flex-grow pb-12">
                    <div className="absolute top-2 -left-8 w-4 h-4 bg-primary rounded-full"></div>
                    {index !== milestones.length - 1 && (
                      <div className="absolute top-6 -left-6 w-0.5 h-full bg-gray-300"></div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              테레오와 함께<br />
              성공적인 비즈니스를 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              전문가 상담을 통해 귀사에 최적화된 솔루션을 제안해드립니다
            </p>
            <Link
              href="/contact/inquiry"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default CompanyPage;
