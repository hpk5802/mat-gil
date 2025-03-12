'use client';

import { YoutubeData } from '@/app/types/youtube';
import Card from './Card';
import useFetchData from '@/app/hooks/useFetchData';
import { useEffect } from 'react';

function ListContainer({
  lists: initialLists,
  channel,
  hasNext: initialHasNext,
  nextCursor,
}: {
  lists: YoutubeData[];
  channel: string;
  hasNext: boolean;
  nextCursor: number | null;
}) {
  const { lists, hasNext, endRef } = useFetchData(
    channel,
    initialLists,
    initialHasNext,
    nextCursor,
  );

  useEffect(() => {
    localStorage.setItem('lastVisited', channel);
  }, [channel]);

  return (
    <ul
      className="mx-auto flex flex-wrap gap-x-[3%] gap-y-4 px-3 py-5 md:w-[46.25rem] md:gap-x-[2%] md:gap-y-5 md:px-0"
      role="list"
      aria-label="맛집 목록"
    >
      <Card channel={channel} lists={lists} />
      {hasNext && <div ref={endRef} className="h-0.5 w-full" />}
    </ul>
  );
}

export default ListContainer;
