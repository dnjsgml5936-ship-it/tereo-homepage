"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const videos = [
    {
      id: 1,
      title: '테레오 기업 소개 영상',
      description: '주식회사 테레오의 비전과 서비스를 소개합니다',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3:24',
      views: '1.2K',
      date: '2024.07.15'
    },
    {
      id: 2,
      title: '세무 컨설팅 성공사례',
      description: '연 3억원 절세에 성공한 제조업체의 이야기',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5:12',
      views: '856',
      date: '2024.07.10'
    },
    {
      id: 3,
      title: '가업승계 완벽 가이드',
      description: '성공적인 가업승계를 위한 단계별 전략',
      thumbnail: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8:45',
      views: '2.3K',
      date: '2024.06.28'
    },
    {
      id: 4,
      title: '2024 세법개정 핵심정리',
      description: '중소기업이 꼭 알아야 할 세법 개정사항',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '12:30',
      views: '4.5K',
      date: '2024.06.20'
    },
    {
      id: 5,
      title: 'ISO 인증 취득 프로세스',
      description: 'ISO 9001 인증 취득 과정을 상세히 설명합니다',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6:20',
      views: '1.8K',
      date: '2024.06.15'
    },
    {
      id: 6,
      title: '정책자금 신청 노하우',
      description: '정부 지원사업 선정률을 높이는 방법',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b3c32ab4055?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7:55',
      views: '3.2K',
      date: '2024.06.10'
    }
  ];

  const webinars = [
    {
      id: 1,
      title: '2024 하반기 세법개정 설명회',
      date: '2024.08.15',
      time: '14:00 - 16:00',
      speaker: '김대표 세무사',
      status: 'upcoming',
      participants: 150
    },
    {
      id: 2,
      title: '중소기업 정책자금 활용 전략',
      date: '2024.08.22',
      time: '15:00 - 17:00',
      speaker: '박이사 컨설턴트',
      status: 'upcoming',
      participants: 200
    },
    {
      id: 3,
      title: '가업승계 절세 전략 웨비나',
      date: '2024.07.20',
      time: '14:00 - 16:00',
      speaker: '이상무 세무사',
      status: 'completed',
      participants: 180
    }
  ];

  const downloads = [
    {
      id: 1,
      title: '2024 세법개정 요약자료',
      type: 'PDF',
      size: '2.5MB',
      downloads: 450,
      category: '세무'
    },
    {
      id: 2,
      title: '정책자금 신청 가이드북',
      type: 'PDF',
      size: '3.8MB',
      downloads: 380,
      category: '정책자금'
    },
    {
      id: 3,
      title: 'ISO 인증 준비 체크리스트',
      type: 'EXCEL',
      size: '1.2MB',
      downloads: 290,
      category: '인증'
    },
    {
      id: 4,
      title: '가업승계 세금계산기',
      type: 'EXCEL',
      size: '856KB',
      downloads: 520,
      category: '가업승계'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-purple-900 to-purple-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">미디어 센터</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              영상, 웨비나, 자료실을 통해 유용한 정보를 제공합니다
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 bg-gray-50 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'videos'
                    ? 'text-primary border-b-4 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                영상 자료
              </button>
              <button
                onClick={() => setActiveTab('webinars')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'webinars'
                    ? 'text-primary border-b-4 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                웨비나
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'downloads'
                    ? 'text-primary border-b-4 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                자료실
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{video.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>조회수 {video.views}</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Webinars Tab */}
            {activeTab === 'webinars' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {webinars.map((webinar, index) => (
                  <div
                    key={webinar.id}
                    className="bg-white rounded-lg shadow-lg p-8 animate-fadeInUp hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{webinar.title}</h3>
                      <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                        webinar.status === 'upcoming'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {webinar.status === 'upcoming' ? '예정' : '완료'}
                      </span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>참가자 {webinar.participants}명</span>
                      </div>
                    </div>
                    {webinar.status === 'upcoming' ? (
                      <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                        신청하기
                      </button>
                    ) : (
                      <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
                        다시보기
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {downloads.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between animate-fadeInUp hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.type === 'PDF' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        <span className={`text-sm font-bold ${
                          item.type === 'PDF' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{item.category}</span>
                          <span>{item.size}</span>
                          <span>다운로드 {item.downloads}회</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      다운로드
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* YouTube Channel CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-6">▶️</div>
            <h2 className="text-4xl font-bold mb-6">YouTube 채널 구독</h2>
            <p className="text-xl mb-8 opacity-90">
              더 많은 영상 콘텐츠를 YouTube에서 만나보세요
            </p>
            <a
              href="https://www.youtube.com/@biztereo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              YouTube 채널 방문
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default MediaPage;
