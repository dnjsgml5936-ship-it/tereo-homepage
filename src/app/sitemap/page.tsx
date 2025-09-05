"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: '홈',
      href: '/',
      children: []
    },
    {
      title: '회사소개',
      href: '/company',
      children: [
        { title: '그룹소개', href: '/company' },
        { title: '전문가소개', href: '/company/expert' },
        { title: '추천시스템', href: '/company/recommendation' },
        { title: '뉴스정보', href: '/company/news' },
        { title: '미디어센터', href: '/company/media' }
      ]
    },
    {
      title: '컨설팅 서비스',
      href: '/services',
      children: [
        { title: '서비스 소개', href: '/services' },
        { title: '세무 컨설팅', href: '/consulting/tax' },
        { title: '종합 컨설팅', href: '/consulting/total' },
        { title: '정책자금', href: '/consulting/funding' }
      ]
    },
    {
      title: '고객지원',
      href: '/contact',
      children: [
        { title: '제휴문의', href: '/contact/alliance' },
        { title: '컨설팅신청', href: '/contact/inquiry' },
        { title: '오시는길', href: '/contact/directions' }
      ]
    },
    {
      title: '고객센터',
      href: '/support',
      children: [
        { title: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: '약관 및 정책',
      href: '/legal',
      children: [
        { title: '개인정보처리방침', href: '/privacy' },
        { title: '이용약관', href: '/terms' },
        { title: '사이트맵', href: '/sitemap' }
      ]
    }
  ];

  const quickLinks = [
    { title: '세무 컨설팅', href: '/consulting/tax', description: '절세전략 및 세무관리 서비스' },
    { title: '종합 컨설팅', href: '/consulting/total', description: '토탈 비즈니스 솔루션' },
    { title: '정책자금', href: '/consulting/funding', description: '정부지원사업 컨설팅' },
    { title: '컨설팅 신청', href: '/contact/inquiry', description: '무료 상담 신청' },
    { title: '제휴 문의', href: '/contact/alliance', description: '파트너십 제안' },
    { title: '오시는 길', href: '/contact/directions', description: '본사 및 지사 위치' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-green-900 to-green-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">사이트맵</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              테레오 웹사이트의 모든 페이지를 한눈에 확인하세요
            </p>
          </div>
        </section>

        {/* Main Sitemap */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                전체 페이지 구조
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <Link href={section.href} className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
                        {section.title}
                      </Link>
                    </div>

                    {section.children.length > 0 && (
                      <ul className="space-y-2 ml-4">
                        {section.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.href}
                              className="text-gray-600 hover:text-primary transition-colors flex items-center"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                주요 서비스 바로가기
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover-lift animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-medium">자세히 보기</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                연락처 정보
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">본사</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">주소</p>
                        <p className="text-gray-600">서울특별시 영등포구 국회대로66길 17, 1001호</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">전화</p>
                        <p className="text-gray-600">02-784-8272</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">이메일</p>
                        <p className="text-gray-600">tereo@smbiz.or.kr</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">운영시간</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800 mb-2">상담 가능 시간</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>평일: 09:00 - 18:00</li>
                        <li>토요일: 예약제 운영</li>
                        <li>일요일 및 공휴일: 휴무</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-gray-800 mb-2">온라인 문의</p>
                      <p className="text-gray-600">24시간 접수 가능</p>
                      <p className="text-gray-600 text-sm">(답변은 운영시간 내 제공)</p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact/inquiry"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        상담 신청하기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">페이지를 찾지 못하셨나요?</h2>
            <p className="text-xl mb-8 opacity-90">
              원하시는 정보를 빠르게 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                자주 묻는 질문
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                1:1 문의하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
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

export default SitemapPage;
