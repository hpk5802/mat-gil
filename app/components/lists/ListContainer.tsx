'use client';

import Card from './Card';
import useFetchData from '@/app/hooks/useFetchData';
import { useEffect } from 'react';

function ListContainer({
  channel,
  hasNext: initialHasNext,
  nextCursor,
}: {
  channel: string;
  hasNext: boolean;
  nextCursor: number | null;
}) {
  const { lists, hasNext, endRef } = useFetchData(
    channel,
    initialHasNext,
    nextCursor,
  );

  useEffect(() => {
    localStorage.setItem('lastVisited', channel);
  }, [channel]);

  return (
    <>
      <Card channel={channel} lists={lists} />
      {hasNext && <div ref={endRef} className="h-0.5 w-full" />}
    </>
  );
}

export default ListContainer;
