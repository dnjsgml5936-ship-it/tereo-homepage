"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">개인정보처리방침</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              고객님의 개인정보를 안전하게 보호합니다
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <p className="text-blue-800">
                  <strong>시행일자:</strong> 2024년 1월 1일<br />
                  <strong>개정일자:</strong> 2024년 7월 1일
                </p>
              </div>

              <div className="space-y-12">
                {/* 제1조 */}
                <div className="animate-fadeInUp">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제1조 (개인정보의 처리목적)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      주식회사 테레오(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다.
                      처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                      이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등
                      필요한 조치를 이행할 예정입니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>컨설팅 서비스 제공 및 계약의 이행</li>
                      <li>서비스 이용 관련 상담 및 문의 응답</li>
                      <li>고객 맞춤형 서비스 제공</li>
                      <li>마케팅 및 광고에의 활용</li>
                      <li>법령 및 회사 정책에 따른 거래 관련 업무</li>
                    </ul>
                  </div>
                </div>

                {/* 제2조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제2조 (개인정보의 처리 및 보유기간)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 회사는 법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터 개인정보를
                      수집 시에 동의받은 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold mb-2">처리 목적별 보유기간:</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>컨설팅 서비스 제공: 계약 종료 후 3년</li>
                        <li>마케팅 활용: 동의 철회 시까지</li>
                        <li>상담 및 문의: 처리 완료 후 1년</li>
                        <li>계약서 및 청약철회 등에 관한 기록: 5년</li>
                        <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 제3조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제3조 (개인정보의 제3자 제공)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 회사는 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며,
                      정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는
                      경우에만 개인정보를 제3자에게 제공합니다.
                    </p>
                    <p>
                      ② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>제공받는 자: 협력업체 (세무사, 변호사, 노무사 등)</li>
                        <li>제공 목적: 전문 컨설팅 서비스 제공</li>
                        <li>제공 항목: 회사명, 담당자명, 연락처</li>
                        <li>보유 및 이용기간: 서비스 완료 시까지</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 제4조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제4조 (정보주체의 권리·의무 및 행사방법)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>개인정보 처리현황 통지요구</li>
                      <li>개인정보 열람요구</li>
                      <li>개인정보 정정·삭제요구</li>
                      <li>개인정보 처리정지요구</li>
                    </ul>
                    <p>
                      ② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조제1항에 따라
                      서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
                    </p>
                  </div>
                </div>

                {/* 제5조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제5조 (개인정보의 안전성 확보조치)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>개인정보 취급 직원의 최소화 및 교육</li>
                      <li>개인정보에 대한 접근 제한</li>
                      <li>개인정보의 암호화</li>
                      <li>해킹 등에 대비한 기술적 대책</li>
                      <li>개인정보처리시스템 등의 접근권한 관리</li>
                      <li>접근통제시스템 설치 및 운영</li>
                      <li>물리적 보관 장소에 대한 접근통제</li>
                    </ul>
                  </div>
                </div>

                {/* 제6조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제6조 (개인정보 보호책임자)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                      정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold mb-4 text-lg">개인정보 보호책임자</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>성명:</strong> 김대표</p>
                          <p><strong>직책:</strong> 대표이사</p>
                          <p><strong>연락처:</strong> 02-784-8272</p>
                        </div>
                        <div>
                          <p><strong>이메일:</strong> privacy@tereo.co.kr</p>
                          <p><strong>부서:</strong> 경영지원팀</p>
                        </div>
                      </div>
                    </div>
                    <p>
                      ② 정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                      불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 제7조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제7조 (개인정보 처리방침 변경)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
                      추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                    </p>
                    <p>
                      ② 본 방침은 2024년 7월 1일부터 시행됩니다.
                    </p>
                  </div>
                </div>

                {/* 문의처 */}
                <div className="bg-primary/10 p-8 rounded-lg animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">개인정보 관련 문의</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong>전화:</strong> 02-784-8272
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>이메일:</strong> privacy@tereo.co.kr
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong>운영시간:</strong> 평일 09:00 - 18:00
                      </p>
                      <p className="text-gray-600">
                        <strong>주소:</strong> 서울특별시 영등포구 국회대로66길 17, 1001호
                      </p>
                    </div>
                  </div>
                </div>
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

export default PrivacyPage;
