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
  title: '맛길',
  description: '맛집 나한테 맡(맛)길래?',
  verification: {
    google: '1Osq17NvlbMi8cqt4h7IL_MG--hzY-1wTAkTgA4I1hI',
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
