"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'notice', name: '공지사항' },
    { id: 'news', name: '뉴스' },
    { id: 'column', name: '칼럼' },
    { id: 'case', name: '성공사례' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'notice',
      title: '2024년 하반기 세법 개정안 설명회 안내',
      excerpt: '2024년 하반기 세법 개정사항에 대한 무료 설명회를 개최합니다. 중소기업 대표님들의 많은 참여 부탁드립니다.',
      date: '2024.07.20',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      pinned: true
    },
    {
      id: 2,
      category: 'news',
      title: '테레오, 2024 대한민국 경영대상 컨설팅 부문 수상',
      excerpt: '주식회사 테레오가 2024 대한민국 경영대상에서 컨설팅 부문 대상을 수상하는 영예를 안았습니다.',
      date: '2024.07.15',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'column',
      title: '가업승계, 지금이 최적의 시기인 이유',
      excerpt: '최근 세법 개정으로 가업승계 공제 한도가 대폭 상향되었습니다. 전문가가 알려주는 가업승계 전략을 소개합니다.',
      date: '2024.07.10',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'case',
      title: '제조업 A사, 정책자금 10억원 유치 성공',
      excerpt: '테레오의 컨설팅을 통해 중견 제조업체가 정부 R&D 자금 10억원을 성공적으로 유치한 사례를 소개합니다.',
      date: '2024.07.05',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'news',
      title: '부산지사 확장 이전 오픈',
      excerpt: '더 나은 서비스 제공을 위해 부산지사가 확장 이전했습니다. 새로운 공간에서 고객 여러분을 맞이하겠습니다.',
      date: '2024.06.30',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'column',
      title: '중소기업이 놓치기 쉬운 세액공제 5가지',
      excerpt: '많은 중소기업이 모르고 지나치는 세액공제 항목들을 정리했습니다. 절세의 기회를 놓치지 마세요.',
      date: '2024.06.25',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">뉴스 & 정보</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              테레오의 최신 소식과 유용한 정보를 확인하세요
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <article
                  key={item.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fadeInUp hover-lift ${
                    item.pinned ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.pinned && (
                    <div className="bg-primary text-white px-4 py-2 text-sm font-bold">
                      중요 공지
                    </div>
                  )}
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        item.category === 'notice' ? 'bg-red-500 text-white' :
                        item.category === 'news' ? 'bg-blue-500 text-white' :
                        item.category === 'column' ? 'bg-green-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <Link
                        href={`/company/news/${item.id}`}
                        className="text-primary font-medium hover:underline"
                      >
                        자세히 보기 →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                이전
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                다음
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">뉴스레터 구독</h2>
            <p className="text-xl mb-8 opacity-90">
              테레오의 최신 소식과 유용한 경영 정보를 이메일로 받아보세요
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                구독하기
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default NewsPage;
