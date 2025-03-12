'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import IconFork from '@/app/components/icons/IconFork';
import IconLoaderCircle from '@/app/components/icons/IconLoaderCircle';

function LinkToLastVisited() {
  const [lastVisited, setLastVisited] = useState<string | null>(null);

  useEffect(() => {
    setLastVisited(localStorage.getItem('lastVisited') || 'pungja');
  }, []);

  if (!lastVisited)
    return (
      <div
        className="relative inline-flex h-11 w-44 items-center justify-center gap-1 rounded-lg bg-btn-background opacity-50"
        aria-live="polite"
      >
        <p className="sr-only">최근 방문한 맛집 데이터를 불러오는 중입니다.</p>
        최근 방문 조회중
        <IconLoaderCircle className="animate-spin" />
      </div>
    );

  return (
    <Link
      href={`/${lastVisited}`}
      className="inline-flex h-11 w-44 items-center justify-center gap-2 rounded-lg bg-btn-background"
      title="마지막으로 방문한 채널 페이지로 이동"
      aria-label="마지막으로 방문한 채널 페이지로 이동"
      prefetch={false}
    >
      <IconFork className="h-4 w-4" />
      <span className="text-lg font-medium">맛집 탐방 시작</span>
    </Link>
  );
}

export default LinkToLastVisited;
