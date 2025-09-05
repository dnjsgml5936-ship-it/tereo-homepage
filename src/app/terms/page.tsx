"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">이용약관</h1>
            <p className="text-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              서비스 이용에 관한 약관을 안내해드립니다
            </p>
          </div>
        </section>

        {/* Terms Content */}
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
                    제1조 (목적)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      이 약관은 주식회사 테레오(이하 "회사")가 제공하는 컨설팅 서비스(이하 "서비스")의
                      이용조건 및 절차, 회사와 회원 간의 권리, 의무, 책임사항과 기타 필요한 사항을
                      규정함을 목적으로 합니다.
                    </p>
                  </div>
                </div>

                {/* 제2조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제2조 (정의)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>"회사"</strong>란 주식회사 테레오를 의미합니다.</li>
                      <li><strong>"서비스"</strong>란 회사가 제공하는 모든 컨설팅 서비스를 의미합니다.</li>
                      <li><strong>"고객"</strong>이란 회사와 서비스 이용계약을 체결한 개인 또는 법인을 의미합니다.</li>
                      <li><strong>"계약"</strong>이란 서비스 이용과 관련하여 회사와 고객 간에 체결되는 모든 계약을 의미합니다.</li>
                    </ul>
                  </div>
                </div>

                {/* 제3조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제3조 (약관의 효력 및 변경)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 본 약관은 서비스를 이용하고자 하는 모든 고객에 대하여 그 효력을 발생합니다.
                    </p>
                    <p>
                      ② 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은
                      적용일자 7일 이전부터 회사 홈페이지에 공지함으로써 효력을 발생합니다.
                    </p>
                    <p>
                      ③ 고객이 변경된 약관에 동의하지 않을 경우, 서비스 이용계약을 해지할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 제4조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제4조 (서비스의 내용)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>회사가 제공하는 서비스의 내용은 다음과 같습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>세무 컨설팅 (법인세, 소득세, 부가가치세 등)</li>
                      <li>가업승계 컨설팅</li>
                      <li>기업인증 컨설팅 (ISO, 벤처기업, 이노비즈 등)</li>
                      <li>정책자금 컨설팅</li>
                      <li>노무 컨설팅</li>
                      <li>경영자문 컨설팅</li>
                      <li>기타 회사가 정하는 컨설팅 서비스</li>
                    </ul>
                  </div>
                </div>

                {/* 제5조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제5조 (계약의 성립)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 서비스 이용계약은 고객의 서비스 이용 신청에 대해 회사가 승낙함으로써 성립됩니다.
                    </p>
                    <p>
                      ② 회사는 다음 각 호에 해당하는 경우 서비스 이용신청에 대한 승낙을 하지 않을 수 있습니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                      <li>사회의 안녕과 질서, 미풍양속을 저해할 목적으로 신청한 경우</li>
                      <li>기타 회사가 정한 이용신청 요건을 충족하지 못한 경우</li>
                    </ul>
                  </div>
                </div>

                {/* 제6조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제6조 (서비스 이용료 및 결제)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 서비스 이용료는 계약서에 명시된 금액을 기준으로 하며,
                      사전에 고객에게 명확히 고지됩니다.
                    </p>
                    <p>
                      ② 서비스 이용료의 결제방법은 다음과 같습니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>계좌이체</li>
                      <li>신용카드 결제</li>
                      <li>현금 결제</li>
                      <li>기타 회사가 정하는 결제수단</li>
                    </ul>
                    <p>
                      ③ 서비스 이용료는 계약금, 중도금, 잔금으로 분할 납부할 수 있으며,
                      구체적인 납부 일정은 계약서에 명시됩니다.
                    </p>
                  </div>
                </div>

                {/* 제7조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제7조 (회사의 의무)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>① 회사는 다음 각 호의 의무를 부담합니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않을 의무</li>
                      <li>지속적이고 안정적인 서비스를 제공할 의무</li>
                      <li>고객이 안전하게 서비스를 이용할 수 있도록 시설을 정비할 의무</li>
                      <li>고객의 개인정보 보호를 위해 노력할 의무</li>
                      <li>서비스와 관련된 고객의 의견이나 불만을 신속하고 적절하게 처리할 의무</li>
                    </ul>
                  </div>
                </div>

                {/* 제8조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제8조 (고객의 의무)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>① 고객은 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>신청 또는 변경 시 허위내용을 등록하는 행위</li>
                      <li>회사의 서비스 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위</li>
                      <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
                      <li>공서양속에 위반되는 내용의 정보, 문장, 도형, 음향, 동영상을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게 유포하는 행위</li>
                      <li>서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위</li>
                    </ul>
                  </div>
                </div>

                {/* 제9조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제9조 (계약의 해지)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 고객은 언제든지 서비스 이용계약 해지를 신청할 수 있으며,
                      회사는 관련 법령이 정하는 바에 따라 이를 즉시 처리하여야 합니다.
                    </p>
                    <p>
                      ② 회사는 고객이 다음 각 호에 해당하는 경우 사전 통지 없이 이용계약을 해지할 수 있습니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>이 약관을 위반한 경우</li>
                      <li>서비스 이용료를 정당한 사유 없이 3회 이상 연체한 경우</li>
                      <li>회사의 서비스 제공목적 외의 용도로 서비스를 이용한 경우</li>
                      <li>기타 중대한 사유로 서비스 이용을 지속하기 어려운 경우</li>
                    </ul>
                  </div>
                </div>

                {/* 제10조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제10조 (손해배상 및 면책조항)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 회사와 고객은 본 약관을 위반하여 상대방에게 손해를 끼친 경우,
                      그 손해를 배상할 책임이 있습니다.
                    </p>
                    <p>
                      ② 회사는 다음 각 호의 경우에는 책임이 면제됩니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우</li>
                      <li>고객의 귀책사유로 서비스 이용에 장애가 있는 경우</li>
                      <li>제3자의 고의적인 서비스 방해에 대해 회사가 방지하거나 예견할 수 없었던 경우</li>
                      <li>고객이 제공한 정보의 오류로 인한 손해의 경우</li>
                    </ul>
                  </div>
                </div>

                {/* 제11조 */}
                <div className="animate-fadeInUp" style={{ animationDelay: '1.0s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary pb-2">
                    제11조 (분쟁의 해결)
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      ① 회사와 고객은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여
                      필요한 모든 노력을 하여야 합니다.
                    </p>
                    <p>
                      ② 제1항의 노력에도 불구하고 분쟁이 해결되지 않을 경우에는
                      민사소송법상의 관할법원에 소를 제기할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 부칙 */}
                <div className="bg-gray-50 p-8 rounded-lg animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">부칙</h3>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p>이 약관은 2024년 7월 1일부터 시행됩니다.</p>
                    <p>개정 전 약관은 본 약관으로 대체됩니다.</p>
                  </div>
                </div>

                {/* 문의처 */}
                <div className="bg-primary/10 p-8 rounded-lg animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">약관 관련 문의</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong>전화:</strong> 02-784-8272
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>이메일:</strong> tereo@smbiz.or.kr
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

export default TermsPage;
