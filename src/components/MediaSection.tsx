import React from 'react';
import Link from 'next/link';

const MediaSection = () => {
  const mediaItems = [
    {
      type: 'video',
      title: '테레오 기업소개 영상',
      description: '주식회사 테레오의 전문성과 서비스를 소개합니다',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '03:24'
    },
    {
      type: 'news',
      title: '2024년 세무 컨설팅 트렌드',
      description: '변화하는 세무환경에 대응하는 테레오의 전략',
      thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024.07.15'
    },
    {
      type: 'case',
      title: '중소기업 성공 사례',
      description: '테레오와 함께한 기업들의 성장 스토리',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024.07.10'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">미디어 센터</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            테레오의 최신 소식과 전문 인사이트를 확인해보세요
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay for video */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'video' ? 'bg-red-500 text-white' :
                    item.type === 'news' ? 'bg-blue-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {item.type === 'video' ? 'VIDEO' :
                     item.type === 'news' ? 'NEWS' : 'CASE'}
                  </span>
                </div>
                {/* Duration/Date */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {item.duration || item.date}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">미디어 콘텐츠</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-gray-600">성공 사례</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">뉴스 기사</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600">기업 영상</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/company/media"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 hover:bg-primary/90 transition-all duration-300"
          >
            <span className="font-medium">더 많은 미디어 보기</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
