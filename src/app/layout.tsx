import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "주식회사 테레오",
  description: "기업 맞춤형 절세전략, 가업승계, 가지급금, 이익잉여금, 자기주식, 법인전환, 기업부설연구소, 기업인증, 노무관리, 정책자금, 중소기업종합컨설팅",
  keywords: "테레오, 세무컨설팅, 가업승계, 기업인증, 정책자금, 경영자문",
  openGraph: {
    title: "주식회사 테레오",
    description: "기업의 시작, 성장, 나눔을 함께 합니다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
