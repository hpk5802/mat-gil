import type { Metadata } from 'next';
import { Bagel_Fat_One } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/common/Header';

const bagelFatOne = Bagel_Fat_One({
  variable: '--font-bagel-fat-one',
  subsets: ['latin'], // 'latin' 또는 'latin-ext' 배열 사용
  weight: '400', // 기본 weight 설정 (선택 사항)
  style: 'normal', // 기본 스타일 설정 (선택 사항)
});

export const metadata: Metadata = {
  title: '맛길',
  description: '맛집 나한테 맡(맛)길래?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${bagelFatOne.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
