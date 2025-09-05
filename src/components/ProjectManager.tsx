import React from 'react';
import Link from 'next/link';

const ProjectManager = () => {
  const experts = [
    {
      name: '김전문',
      role: '세무 전문가',
      experience: '15년 경력',
      speciality: '법인세, 소득세 전문',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '박컨설',
      role: '경영 컨설턴트',
      experience: '12년 경력',
      speciality: '기업진단, 경영전략',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '이자문',
      role: '정책자금 전문가',
      experience: '10년 경력',
      speciality: '정부지원사업, R&D',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">전문가 팀</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            각 분야의 전문가들이 모여 고객의 성공을 위한 최적의 솔루션을 제공합니다
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-primary font-medium mb-1">{expert.role}</p>
                <p className="text-gray-600 text-sm mb-2">{expert.experience}</p>
                <p className="text-gray-500 text-sm">{expert.speciality}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/company/expert"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 hover:bg-primary/90 transition-all duration-300"
          >
            <span className="font-medium">전문가 자세히 보기</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectManager;
