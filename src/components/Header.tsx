"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    company: {
      title: t('company'),
      subItems: [
        { title: '그룹소개', href: '/company', description: '테레오의 비전과 가치' },
        { title: '전문가소개', href: '/company/expert', description: '각 분야 최고의 전문가' },
        { title: '추천시스템', href: '/company/recommendation', description: '맞춤형 전문가 매칭' },
        { title: '뉴스정보', href: '/company/news', description: '최신 소식과 공지사항' },
        { title: '미디어', href: '/company/media', description: '영상 및 보도자료' }
      ]
    },
    consulting: {
      title: t('consulting'),
      subItems: [
        { title: '세무 컨설팅', href: '/services#tax', description: '절세전략 및 세무관리' },
        { title: '가업승계 컨설팅', href: '/services#succession', description: '안정적인 경영권 이전' },
        { title: '기업인증 컨설팅', href: '/services#certification', description: 'ISO, 벤처기업 인증' },
        { title: '노무 컨설팅', href: '/services#labor', description: '인사노무 관리 및 노사관계' },
        { title: '정책자금 컨설팅', href: '/services#funding', description: '정부지원사업 컨설팅' },
        { title: '경영자문 컨설팅', href: '/services#management', description: '종합 경영전략 수립' }
      ]
    },
    assetlab: {
      title: '미래자산연구소',
      subItems: [
        { title: '매물 전체보기', href: '/asset-lab', description: '테레오 보유 부동산 매물' },
        { title: '매도문의', href: '/asset-lab/sell', description: '보유 자산 판매 상담' },
        { title: '매수문의', href: '/asset-lab/buy', description: '구매/투자 상담' },
        { title: '업무제휴', href: '/asset-lab/partner', description: '기업 제휴 문의' }
      ]
    },
    contact: {
      title: t('contact'),
      subItems: [
        { title: '제휴문의', href: '/contact/alliance', description: '파트너십 제안' },
        { title: '컨설팅신청', href: '/contact/inquiry', description: '무료 상담 신청' },
        { title: '오시는길', href: '/contact/directions', description: '본사 및 지사 위치' }
      ]
    }
  };

  // To ensure the order: company, consulting, assetlab, contact
  const menuOrder = ['company', 'consulting', 'assetlab', 'contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : transparent ? 'bg-transparent' : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              TEREO
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuOrder.map((key) => {
              const menu = menuItems[key as keyof typeof menuItems];
              return (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => {
                    if (menuTimeout) {
                      clearTimeout(menuTimeout);
                      setMenuTimeout(null);
                    }
                    setActiveMenu(key);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setActiveMenu(null);
                    }, 150);
                    setMenuTimeout(timeout);
                  }}
                >
                  <button className={`font-medium transition-colors h-20 px-4 flex items-center ${
                    scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}>
                    {menu.title}
                  </button>

                  {/* Dropdown Menu */}
                  {activeMenu === key && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-72">
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden dropdown-menu header-dropdown">
                        <div className="p-2">
                          {menu.subItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block px-5 py-4 hover:bg-gray-50 rounded-md transition-all duration-200 group/item border-b border-gray-50 last:border-0"
                            >
                              <div className="flex flex-col">
                                <span className="text-gray-900 font-medium text-base group-hover/item:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-gray-500 text-sm mt-1">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <button className={`hidden md:block transition-colors touch-target ${
              scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors touch-target ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {menuOrder.map((key) => {
                const menu = menuItems[key as keyof typeof menuItems];
                return (
                  <div key={key} className="space-y-2">
                    <div className="font-bold text-gray-900 py-2 border-b border-gray-100">
                      {menu.title}
                    </div>
                    {menu.subItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors mobile-button"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">언어 설정</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
