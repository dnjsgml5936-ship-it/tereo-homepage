"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    companySize: '',
    industry: '',
    consultingType: [] as string[],
    budget: '',
    timeline: '',
    message: ''
  });

  const consultingTypes = [
    { id: 'tax', label: '세무 컨설팅' },
    { id: 'succession', label: '가업승계' },
    { id: 'certification', label: '기업인증' },
    { id: 'funding', label: '정책자금' },
    { id: 'labor', label: '노무관리' },
    { id: 'management', label: '경영자문' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('컨설팅 신청이 접수되었습니다. 24시간 이내에 전문가가 연락드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (consultingId: string) => {
    setFormData({
      ...formData,
      consultingType: formData.consultingType.includes(consultingId)
        ? formData.consultingType.filter(id => id !== consultingId)
        : [...formData.consultingType, consultingId]
    });
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-green-600 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">컨설팅 신청</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              전문가의 맞춤형 컨설팅으로 기업의 성장을 가속화하세요
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              컨설팅 진행 과정
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '01', title: '신청서 작성', desc: '온라인 신청서를 통해 기본 정보 입력' },
                { step: '02', title: '전문가 배정', desc: '24시간 이내 최적의 전문가 매칭' },
                { step: '03', title: '초기 상담', desc: '무료 초기 상담을 통한 현황 파악' },
                { step: '04', title: '제안서 제공', desc: '맞춤형 컨설팅 제안서 제공' },
                { step: '05', title: '컨설팅 시작', desc: '계약 후 본격적인 컨설팅 진행' }
              ].map((process, index) => (
                <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-bold mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                컨설팅 신청서
              </h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                {/* Company Information */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800">기업 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      업종 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">선택해주세요</option>
                      <option value="manufacturing">제조업</option>
                      <option value="it">IT/소프트웨어</option>
                      <option value="retail">도소매업</option>
                      <option value="construction">건설업</option>
                      <option value="service">서비스업</option>
                      <option value="medical">의료/바이오</option>
                      <option value="logistics">물류/운송</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      기업 규모 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-10">1-10명</option>
                      <option value="11-50">11-50명</option>
                      <option value="51-100">51-100명</option>
                      <option value="101-300">101-300명</option>
                      <option value="300+">300명 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      연간 매출액
                    </label>
                    <select
                      name="revenue"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-1b">10억 미만</option>
                      <option value="1-5b">10억-50억</option>
                      <option value="5-10b">50억-100억</option>
                      <option value="10-50b">100억-500억</option>
                      <option value="over-50b">500억 이상</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800">담당자 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      직책
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Consulting Type */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800">컨설팅 분야</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {consultingTypes.map((type) => (
                    <label key={type.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consultingType.includes(type.id)}
                        onChange={() => handleCheckboxChange(type.id)}
                        className="w-5 h-5 text-primary"
                      />
                      <span className="text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    희망 시작 시기
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="">선택해주세요</option>
                    <option value="immediate">즉시</option>
                    <option value="1month">1개월 이내</option>
                    <option value="3months">3개월 이내</option>
                    <option value="6months">6개월 이내</option>
                    <option value="undecided">미정</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    상세 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="컨설팅이 필요한 구체적인 내용을 작성해주세요"
                    required
                  />
                </div>

                {/* Privacy Agreement */}
                <div className="mb-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 컨설팅 상담 목적으로만 사용되며,
                      상담 완료 후 관련 법령에 따라 보관 후 안전하게 폐기됩니다.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  컨설팅 신청하기
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              왜 테레오를 선택해야 할까요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">85,000+</div>
                <h3 className="text-xl font-bold mb-2">누적 컨설팅</h3>
                <p className="text-gray-600">풍부한 경험과 노하우</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">98%</div>
                <h3 className="text-xl font-bold mb-2">고객 만족도</h3>
                <p className="text-gray-600">높은 고객 만족도 유지</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">24h</div>
                <h3 className="text-xl font-bold mb-2">빠른 응답</h3>
                <p className="text-gray-600">24시간 이내 전문가 연결</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">22</div>
                <h3 className="text-xl font-bold mb-2">전국 지사</h3>
                <p className="text-gray-600">전국 어디서나 서비스 제공</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default InquiryPage;
