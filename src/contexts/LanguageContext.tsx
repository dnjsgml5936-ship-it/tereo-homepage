"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // Header
    company: '회사소개',
    consulting: '컨설팅',
    contact: '문의하기',

    // Hero Section
    heroTitle: '기업의 성공을 위한\n전문 컨설팅 파트너',
    heroSubtitle: '기업의 시작, 성장, 나눔을 함께 합니다.',

    // Services
    taxConsulting: '세무 컨설팅',
    taxConsultingDesc: '절세전략 법인세 컨설팅',
    totalConsulting: '종합 컨설팅',
    totalConsultingDesc: '토탈 비즈니스 솔루션',
    policyFunding: '정책자금',
    policyFundingDesc: '정부지원사업 컨설팅',

    // About
    aboutTitle: 'ABOUT TEREO',
    since2007: '최고의 비즈니스 Consulting 파트너',
    consultingCount: '중소기업 맞춤형 컨설팅 KEY',
    specialist: '실무중심 전문가 High Quality 서비스',

    // Project Manager
    projectManagerTitle: 'PROJECT\nMANAGER',
    pmFeature1: '테레오는 업종별 전문가가 고객의 성공을 돕습니다.',
    pmFeature2: '테레오는 컨설팅뿐만 아니라 사후관리도 책임집니다.',
    pmFeature3: '테레오는 정직과 신뢰를 바탕으로 움직입니다.',
    pmFeature4: '테레오의 차별화된 서비스를 지금 바로 경험해보세요!',
    expertIntro: '전문가 소개',

    // Branch
    branchTitle: 'BRANCH',

    // Media
    mediaTitle: 'TEREO MEDIA',
    mediaDesc: '세무 / 노무 / 법무 / 인증 / 정책자금 / 연구개발 / 경영자문 등 기업에 필요한 모든 서비스를 제공합니다.',
    moreVideos: '더 많은 영상 보기',

    // Footer
    footerCTA: '지금 바로 HIGH QUALITY 컨설팅을 경험하세요',
    footerDesc: '더 자세한 상담을 원하시면 연락주세요. 전문가가 친절히 안내해드립니다.',
    businessHours: '상담시간 AM 9:00 ~ PM 6:00 / 토요일(예약)',

    // Navigation
    learnMore: '자세히 보기',
  },
  en: {
    // Header
    company: 'COMPANY',
    consulting: 'CONSULTING',
    contact: 'CONTACT US',

    // Hero Section
    heroTitle: 'Your Professional\nConsulting Partner',
    heroSubtitle: 'We accompany the start, growth, and sharing of businesses.',

    // Services
    taxConsulting: 'TAX CONSULTING',
    taxConsultingDesc: 'Tax saving strategy & corporate tax consulting',
    totalConsulting: 'TOTAL CONSULTING',
    totalConsultingDesc: 'Total business solutions',
    policyFunding: 'POLICY FUNDING',
    policyFundingDesc: 'Government support business consulting',

    // About
    aboutTitle: 'ABOUT TEREO',
    since2007: 'The best business consulting partner',
    consultingCount: 'SME customized consulting KEY',
    specialist: 'Practice-oriented expert High Quality service',

    // Project Manager
    projectManagerTitle: 'PROJECT\nMANAGER',
    pmFeature1: 'TEREO helps customers succeed with industry experts.',
    pmFeature2: 'TEREO is responsible for not only consulting but also follow-up management.',
    pmFeature3: 'TEREO operates based on honesty and trust.',
    pmFeature4: 'Experience TEREO\'s differentiated service right now!',
    expertIntro: 'Expert Introduction',

    // Branch
    branchTitle: 'BRANCH',

    // Media
    mediaTitle: 'TEREO MEDIA',
    mediaDesc: 'We provide all services necessary for businesses, including tax, labor, legal, certification, policy funds, R&D, and management consulting.',
    moreVideos: 'View More Videos',

    // Footer
    footerCTA: 'Experience HIGH QUALITY consulting right now',
    footerDesc: 'Contact us for more detailed consultation. Our experts will kindly guide you.',
    businessHours: 'Business hours: 9:00 AM - 6:00 PM / Saturday (by appointment)',

    // Navigation
    learnMore: 'Learn More',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
