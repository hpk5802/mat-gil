'use client';

import { YoutubeData } from '@/app/types/youtube';
import Card from './Card';
import useFetchData from '@/app/hooks/useFetchData';

function ListContainer({
  lists: initialLists,
  channel,
  hasNext: initialHasNext,
}: {
  lists: YoutubeData[];
  channel: string;
  hasNext: boolean;
}) {
  const { lists, hasNext, endRef } = useFetchData(
    channel,
    initialLists,
    initialHasNext,
  );

  return (
    <div>
      <div className="flex flex-wrap gap-x-[3%] md:gap-x-[2%] gap-y-4 md:gap-y-5 md:w-[46.25rem] mx-auto px-3 py-5 md:px-0">
        <Card channel={channel} lists={lists} />
        {hasNext && <div ref={endRef} className="w-full h-0.5" />}
      </div>
    </div>
  );
}

export default ListContainer;
