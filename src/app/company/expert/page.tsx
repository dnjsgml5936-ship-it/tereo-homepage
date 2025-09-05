"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

const ExpertPage = () => {
  const experts = [
    {
      name: '김대표',
      position: '대표이사',
      experience: '20년 경력',
      speciality: '세무전략, 기업구조개선',
      message: '고객의 성공이 곧 우리의 성공입니다',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '이상무',
      position: '세무본부장',
      experience: '15년 경력',
      speciality: '법인세, 부가가치세',
      message: '정확한 분석으로 최적의 절세방안을 제시합니다',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '박이사',
      position: '컨설팅본부장',
      experience: '18년 경력',
      speciality: '경영전략, M&A',
      message: '기업의 지속가능한 성장을 함께 만들어갑니다',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '최부장',
      position: '인증사업부장',
      experience: '12년 경력',
      speciality: 'ISO인증, 정부지원사업',
      message: '복잡한 인증절차를 쉽고 빠르게 해결해드립니다',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '정차장',
      position: '노무팀장',
      experience: '10년 경력',
      speciality: '노동법, 인사관리',
      message: '건전한 노사관계를 위한 최선의 파트너가 되겠습니다',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '강과장',
      position: 'R&D팀장',
      experience: '8년 경력',
      speciality: '연구개발, 정책자금',
      message: '기업의 기술혁신을 지원하는 든든한 파트너',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">전문가 소개</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              각 분야 최고의 전문가들이 고객의 성공을 위해 함께합니다
            </p>
          </div>
        </section>

        {/* Experts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                    <p className="text-primary font-medium mb-2">{expert.position}</p>
                    <p className="text-gray-600 text-sm mb-3">{expert.experience}</p>
                    <p className="text-gray-700 mb-4">
                      <span className="font-medium">전문분야:</span> {expert.speciality}
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
                      "{expert.message}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">우리의 약속</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fadeInUp">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">전문성</h3>
                <p className="text-gray-600">
                  각 분야 최고의 전문가들이<br />
                  최신 지식과 경험을 바탕으로<br />
                  최적의 솔루션을 제공합니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">책임감</h3>
                <p className="text-gray-600">
                  고객의 성공을 최우선으로<br />
                  끝까지 책임지는 자세로<br />
                  함께 성장해 나갑니다
                </p>
              </div>
              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">혁신</h3>
                <p className="text-gray-600">
                  변화하는 시대에 발맞춰<br />
                  끊임없이 연구하고 발전하여<br />
                  새로운 가치를 창출합니다
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

export default ExpertPage;
