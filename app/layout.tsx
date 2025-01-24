import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
