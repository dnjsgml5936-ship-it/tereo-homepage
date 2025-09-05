"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const DirectionsPage = () => {
  const [selectedBranch, setSelectedBranch] = useState('seoul');

  const branches = {
    seoul: {
      name: '서울 본사',
      address: '서울특별시 영등포구 국회대로66길 17, 1001호',
      tel: '02-784-8272',
      fax: '02-782-8482',
      email: 'tereo@smbiz.or.kr',
      hours: '평일 09:00 - 18:00',
      parking: '주변 공영주차장 이용',
      subway: '9호선 국회의사당역 3번 출구 도보 5분',
      bus: '10, 163, 461, 6713, G7625',
      mapUrl: 'https://maps.google.com/maps?q=37.5300,126.9136&z=15&output=embed'
    }
  };

  const currentBranch = branches[selectedBranch as keyof typeof branches];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">오시는 길</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              서울 영등포구 본사에서 고객님을 기다립니다
            </p>
          </div>
        </section>

        {/* Branch Selection */}
        <section className="py-8 bg-gray-50 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(branches).map(([key, branch]) => (
                <button
                  key={key}
                  onClick={() => setSelectedBranch(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedBranch === key
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {branch.name}
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Map and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="animate-fadeInLeft">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[500px]">
                  <iframe
                    src={currentBranch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Info */}
              <div className="animate-fadeInRight">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">{currentBranch.name}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">주소</h3>
                      <p className="text-gray-600">{currentBranch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">연락처</h3>
                      <p className="text-gray-600">TEL: {currentBranch.tel}</p>
                      <p className="text-gray-600">FAX: {currentBranch.fax}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">영업시간</h3>
                      <p className="text-gray-600">{currentBranch.hours}</p>
                      <p className="text-gray-600 text-sm">토요일, 일요일, 공휴일 휴무</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">주차안내</h3>
                      <p className="text-gray-600">{currentBranch.parking}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">대중교통</h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">지하철:</span> {currentBranch.subway}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">버스:</span> {currentBranch.bus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={`tel:${currentBranch.tel}`}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-center hover:bg-primary/90 transition-colors"
                  >
                    전화 문의
                  </a>
                  <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
                    길찾기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Branches */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">본사 안내</h2>
            <div className="max-w-2xl mx-auto">
              {[
                {
                  name: '서울 본사',
                  address: '서울특별시 영등포구 국회대로66길 17, 1001호',
                  tel: '02-784-8272',
                  fax: '02-782-8482',
                  email: 'tereo@smbiz.or.kr',
                  subway: '9호선 국회의사당역 3번 출구 도보 5분',
                  bus: '10, 163, 461, 6713, G7625',
                  parking: '주변 공영주차장 이용'
                }
              ].map((branch, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">{branch.name}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-800">주소</div>
                        <div className="text-gray-600">{branch.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-800">전화</div>
                        <div className="text-primary font-medium">{branch.tel}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-800">팩스</div>
                        <div className="text-gray-600">{branch.fax}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-800">이메일</div>
                        <div className="text-gray-600">{branch.email}</div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">지하철</div>
                          <div className="text-gray-600">{branch.subway}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">버스</div>
                          <div className="text-gray-600">{branch.bus}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">주차</div>
                          <div className="text-gray-600">{branch.parking}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default DirectionsPage;
