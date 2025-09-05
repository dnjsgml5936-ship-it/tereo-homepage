"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: '일반 문의' },
    { id: 'consulting', name: '컨설팅 서비스' },
    { id: 'tax', name: '세무 컨설팅' },
    { id: 'funding', name: '정책자금' },
    { id: 'payment', name: '비용 및 결제' },
    { id: 'process', name: '진행 과정' }
  ];

  const faqs = {
    general: [
      {
        question: '테레오는 어떤 회사인가요?',
        answer: '주식회사 테레오는 2007년 설립된 기업 컨설팅 전문회사로, 세무, 노무, 법무, 인증, 정책자금 등 기업 경영에 필요한 모든 분야의 컨설팅 서비스를 제공합니다. 전국 22개 지사에서 85,000여 건의 컨설팅 경험을 바탕으로 고객사의 성공을 지원합니다.'
      },
      {
        question: '상담은 어떻게 받을 수 있나요?',
        answer: '온라인 신청서 작성, 전화(02-784-8272), 방문 상담 등 다양한 방법으로 상담을 받으실 수 있습니다. 초기 상담은 무료로 제공되며, 24시간 이내에 전문가가 연락드립니다.'
      },
      {
        question: '전국 어디서나 서비스를 받을 수 있나요?',
        answer: '네, 전국 22개 지사에서 서비스를 제공하고 있으며, 직접 방문이 어려운 경우 화상 상담이나 전화 상담을 통해서도 서비스를 받으실 수 있습니다.'
      },
      {
        question: '상담 시간은 어떻게 되나요?',
        answer: '평일 오전 9시부터 오후 6시까지 상담 가능하며, 토요일은 예약제로 운영됩니다. 급한 경우 사전 협의를 통해 시간 외 상담도 가능합니다.'
      }
    ],
    consulting: [
      {
        question: '어떤 컨설팅 서비스를 제공하나요?',
        answer: '세무 컨설팅, 가업승계, 기업인증, 정책자금, 노무관리, 경영자문 등 기업 경영에 필요한 모든 분야의 컨설팅을 제공합니다. 각 분야별 전문가가 배정되어 맞춤형 솔루션을 제공합니다.'
      },
      {
        question: '컨설팅 기간은 얼마나 걸리나요?',
        answer: '프로젝트 성격과 규모에 따라 다르지만, 일반적으로 3개월~1년 정도 소요됩니다. 단순 상담은 즉시 가능하며, 복잡한 프로젝트의 경우 단계별로 진행됩니다.'
      },
      {
        question: '소규모 기업도 서비스를 받을 수 있나요?',
        answer: '네, 1인 기업부터 대기업까지 모든 규모의 기업에 맞는 서비스를 제공합니다. 기업 규모에 따른 맞춤형 패키지를 준비하고 있습니다.'
      },
      {
        question: '성공률은 어느 정도인가요?',
        answer: '분야별로 차이는 있지만, 평균적으로 85% 이상의 높은 성공률을 유지하고 있습니다. 특히 정책자금의 경우 90% 이상의 선정률을 보이고 있습니다.'
      }
    ],
    tax: [
      {
        question: '세무 컨설팅을 받으면 얼마나 절세할 수 있나요?',
        answer: '기업 상황에 따라 다르지만, 평균적으로 30% 이상의 세금 절감 효과를 보실 수 있습니다. 정확한 절세 효과는 무료 진단을 통해 확인하실 수 있습니다.'
      },
      {
        question: '세무조사 대응 서비스도 제공하나요?',
        answer: '네, 세무조사 사전 준비부터 조사 진행, 사후 관리까지 전 과정을 지원합니다. 경험 많은 세무사가 직접 동행하여 대응합니다.'
      },
      {
        question: '가지급금 정리는 어떻게 진행되나요?',
        answer: '현황 분석 → 정리 방안 수립 → 세무 리스크 검토 → 실행 순으로 진행됩니다. 세법에 따른 안전한 방법으로 정리하여 추후 문제가 발생하지 않도록 합니다.'
      }
    ],
    funding: [
      {
        question: '어떤 정책자금을 지원받을 수 있나요?',
        answer: 'R&D 지원사업, 창업지원사업, 수출바우처, 중소기업 육성자금 등 다양한 정부 및 공공기관의 지원사업을 안내하고 신청을 대행합니다.'
      },
      {
        question: '정책자금 신청 자격이 어떻게 되나요?',
        answer: '사업별로 다르지만, 일반적으로 중소기업, 벤처기업, 창업기업 등이 대상입니다. 정확한 자격 요건은 무료 상담을 통해 확인해드립니다.'
      },
      {
        question: '지원금액은 얼마나 되나요?',
        answer: '사업에 따라 수백만원부터 수십억원까지 다양합니다. 평균적으로 3억~10억원 규모의 지원을 받는 경우가 많습니다.'
      }
    ],
    payment: [
      {
        question: '컨설팅 비용은 어떻게 책정되나요?',
        answer: '프로젝트 규모, 복잡성, 소요 기간 등을 종합적으로 고려하여 책정됩니다. 초기 상담 후 정확한 견적을 제공해드립니다.'
      },
      {
        question: '비용 지불 방법은 어떻게 되나요?',
        answer: '계약금, 중도금, 잔금으로 분할 지불이 가능하며, 프로젝트 진행 상황에 따라 지불합니다. 카드 결제, 계좌 이체 모두 가능합니다.'
      },
      {
        question: '환불 정책은 어떻게 되나요?',
        answer: '서비스 제공 전 계약 취소 시 전액 환불 가능하며, 진행 중인 경우 진행률에 따라 부분 환불됩니다. 자세한 환불 정책은 계약서에 명시됩니다.'
      }
    ],
    process: [
      {
        question: '컨설팅 진행 과정은 어떻게 되나요?',
        answer: '상담 신청 → 현황 분석 → 솔루션 제안 → 계약 → 실행 → 사후 관리 순으로 진행됩니다. 각 단계별로 고객님께 진행 상황을 공유합니다.'
      },
      {
        question: '중간에 진행 상황을 확인할 수 있나요?',
        answer: '네, 정기적인 진행 보고서를 제공하며, 언제든 담당자에게 진행 상황을 문의하실 수 있습니다. 필요시 중간 점검 미팅도 진행합니다.'
      },
      {
        question: '프로젝트 완료 후에도 지원받을 수 있나요?',
        answer: '네, 프로젝트 완료 후 6개월간 무료 사후 관리 서비스를 제공합니다. 추가 문의사항이나 후속 조치가 필요한 경우 언제든 연락 주시면 됩니다.'
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-purple-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">자주 묻는 질문</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              고객님들이 자주 문의하시는 내용들을 정리했습니다
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 bg-gray-50 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">
                        Q. {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-primary transform transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-6 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          A. {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              전문 상담사가 친절하게 답변해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/inquiry"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                온라인 문의
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:02-784-8272"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 상담 02-784-8272
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default FAQPage;
