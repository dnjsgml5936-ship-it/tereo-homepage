import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: '경력년수' },
    { number: '500+', label: '고객수' },
    { number: '1000+', label: '프로젝트' },
    { number: '98%', label: '만족도' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              테레오와 함께하는<br />
              성공적인 비즈니스
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              주식회사 테레오는 중소기업의 성장과 발전을 위한 전문적인 컨설팅 서비스를 제공합니다.
              15년 이상의 풍부한 경험과 전문성을 바탕으로 고객 맞춤형 솔루션을 제공하여
              기업의 지속가능한 성장을 지원합니다.
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 hover:bg-primary transition-all duration-300"
            >
              <span className="font-medium">회사소개 보기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
