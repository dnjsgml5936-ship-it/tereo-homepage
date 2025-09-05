"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <p className={`text-white/80 text-lg mb-4 tracking-widest ${loaded ? 'animate-fadeInDown' : 'opacity-0'}`}>
            TEREO CONSULTING
          </p>
          <h1 className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t('heroTitle').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('heroTitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className={`text-white/90 text-xl mb-12 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            {t('heroSubtitle')}
          </p>
          <Link
            href="/company"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <span className="font-medium">COMPANY</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
