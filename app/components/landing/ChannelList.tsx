'use client';

import channelList from '@/app/constants/channelList';
import LazyImage from '@/app/components/common/LazyImage';
import Link from 'next/link';
import { useRef } from 'react';
import ScrollButton from '@/app/components/common/ScrollButton';

function ChannelList() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  return (
    <>
      <div className="absolute right-0 top-0 flex justify-end gap-x-2">
        <ScrollButton direction="left" scrollRef={scrollRef} />
        <ScrollButton direction="right" scrollRef={scrollRef} />
      </div>
      <ul
        ref={scrollRef}
        className="mt-6 flex flex-nowrap gap-x-2 overflow-x-scroll md:overflow-hidden"
      >
        {channelList.map(({ key, name, image }) => (
          <li
            className="relative w-64 flex-shrink-0 overflow-hidden rounded-xl bg-card-background"
            key={`channel_${key}`}
            tabIndex={0}
          >
            <Link href={`/${key}`} aria-label={`${name} 채널 보러가기`}>
              <div className="relative h-36 w-full">
                <LazyImage
                  thumbnail={image}
                  alt={`채널 썸네일: ${name}`}
                  sizes="260px"
                />
              </div>
              <h3 className="p-2 text-lg font-medium text-white">{name}</h3>
              <p className="sr-only">{name} 채널의 맛집을 확인해보세요.</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ChannelList;
