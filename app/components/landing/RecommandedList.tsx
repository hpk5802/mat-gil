'use client';

import Link from 'next/link';
import ScrollButton from '@/app/components/common/ScrollButton';
import LazyImage from '@/app/components/common/LazyImage';
import { useRef } from 'react';
import { YoutubeData } from '@/app/types/youtube';
import Category from '@/app/components/lists/Category';
import IconMarker from '@/app/components/icons/IconMarker';

interface RecommandedProps {
  data: {
    channel: string;
    list: YoutubeData[];
  }[];
}

function RecommandedList({ data }: RecommandedProps) {
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
        {data.map(({ channel, list }) =>
          list.map(({ thumbnail, category, title, location, position }) => (
            <li
              className="relative w-64 flex-shrink-0 overflow-hidden rounded-xl bg-card-background"
              key={`${channel}_${title}`}
            >
              <Link
                href={`/${channel}/${position}`}
                aria-label={`${title} 영상 보러가기`}
              >
                <div className="relative h-36 w-full">
                  <LazyImage
                    thumbnail={thumbnail}
                    alt={`썸네일: ${title}`}
                    sizes="260px"
                  />
                </div>
                <div className="p-2">
                  <Category
                    keyValue={`${channel}_${position}`}
                    category={category}
                  />
                  <h3 className="p-2 text-lg font-medium text-white">
                    {title}
                  </h3>
                  <div className="mt-1 flex items-center justify-end gap-0.5 text-xs text-gray-100 md:text-sm">
                    <IconMarker className="h-3.5 w-3.5" />
                    {location}
                  </div>
                </div>
              </Link>
            </li>
          )),
        )}
      </ul>
    </>
  );
}

export default RecommandedList;
