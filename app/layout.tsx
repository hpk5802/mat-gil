import type { Metadata } from 'next';
import { Bagel_Fat_One } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/common/Header';
import Script from 'next/script';

const bagelFatOne = Bagel_Fat_One({
  variable: '--font-bagel-fat-one',
  subsets: ['latin'], // 'latin' 또는 'latin-ext' 배열 사용
  weight: '400', // 기본 weight 설정 (선택 사항)
  style: 'normal', // 기본 스타일 설정 (선택 사항)
});

export const metadata: Metadata = {
  title: '맛길 | 맛집 추천 & 길찾기',
  description:
    '유명 유튜브 영상 기반 맛집 위치, 메뉴, 카테고리가 한눈에! 길찾기 기능으로 원하는 맛집까지 바로 이동해보세요.',
  keywords: [
    '맛길',
    '맛집',
    '유튜버 맛집',
    '유명 맛집',
    '유튜브 맛집',
    '먹방',
    '맛집 추천',
    '맛집 지도',
    '풍자 맛집',
    '풍자 또간집',
    '또간집',
    '성시경 맛집',
    '성시경 먹을텐데',
    '먹을텐데',
    '홍석천&이원일 맛집',
    '홍석천&이원일 줄서는맛집',
    '홍석천&이원일 미식은경험이다',
    '줄서는맛집',
    '미식은 경험이다',
    '입짧은햇님 맛집',
    '입짧은햇님 줄서는식당',
    '줄서는식당',
    '백종원 맛집',
    '백종원 님아그시장을가오',
    '님아 그 시장을 가오',
    '전국 맛집',
    '서울 맛집',
    '부산 맛집',
    '대전 맛집',
    '대구 맛집',
    '광주 맛집',
    '울산 맛집',
    '인천 맛집',
    '경기 맛집',
    '강원 맛집',
    '충북 맛집',
    '충남 맛집',
    '전북 맛집',
    '전남 맛집',
    '경북 맛집',
    '경남 맛집',
    '제주 맛집',
    '길찾기',
    '맛집 길찾기',
  ],
  robots: { index: true, follow: true },
  verification: {
    google: '1Osq17NvlbMi8cqt4h7IL_MG--hzY-1wTAkTgA4I1hI',
  },
  other: {
    'naver-site-verification': '9582afb6c9c9e34083e9761c324a864727811dc6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bagelFatOne.variable} bg-brand-background pt-[5.2rem] antialiased md:pt-[6.5rem]`}
      >
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
