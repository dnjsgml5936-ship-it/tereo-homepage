import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    company: {
      title: '회사소개',
      links: [
        { title: '그룹소개', href: '/company' },
        { title: '전문가소개', href: '/company/expert' },
        { title: '추천시스템', href: '/company/recommendation' },
        { title: '뉴스정보', href: '/company/news' }
      ]
    },
    consulting: {
      title: '컨설팅',
      links: [
        { title: '세무 컨설팅', href: '/services#tax' },
        { title: '가업승계 컨설팅', href: '/services#succession' },
        { title: '기업인증 컨설팅', href: '/services#certification' },
        { title: '노무 컨설팅', href: '/services#labor' },
        { title: '정책자금 컨설팅', href: '/services#funding' },
        { title: '경영자문 컨설팅', href: '/services#management' }
      ]
    },
    contact: {
      title: '고객지원',
      links: [
        { title: '제휴문의', href: '/contact/alliance' },
        { title: '컨설팅신청', href: '/contact/inquiry' },
        { title: '오시는길', href: '/contact/directions' },
        { title: 'FAQ', href: '/faq' }
      ]
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                TEREO
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              기업의 시작, 성장, 나눔을 함께하는<br />
              주식회사 테레오
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>02-784-8272</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>02-782-8482</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>tereo@smbiz.or.kr</span>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>서울특별시 영등포구 국회대로66길 17, 1001호</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="https://www.youtube.com/@biztereo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-bold">yt</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <span className="text-gray-300">뉴스레터 구독:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소 입력"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                />
                <button className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2024 주식회사 테레오. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
