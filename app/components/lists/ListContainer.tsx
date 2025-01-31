'use client';

import { YoutubeData } from '@/app/types/youtube';
import Card from './Card';
import { useCallback, useRef, useState } from 'react';
import axios from '@/app/lib/instance';

function ListContainer({
  lists: initialLists,
  channel,
  hasNext: initialHasNext,
}: {
  lists: YoutubeData[];
  channel: string;
  hasNext: boolean;
}) {
  const [lists, setLists] = useState<YoutubeData[]>(initialLists);
  const [cursor, setCursor] = useState(
    initialLists[initialLists.length - 1].position,
  );
  const [hasNext, setHasNext] = useState(initialHasNext);
  const observer = useRef<IntersectionObserver | null>(null);

  // 데이터 로드 함수
  const fetchData = useCallback(async () => {
    if (!hasNext) return;

    const { data } = await axios.get(channel, {
      params: { cursor },
    });

    setLists((prev) => [...prev, ...data.lists]);
    setCursor(
      data.lists.length > 0 ? data.lists[data.lists.length - 1].position : null,
    );
    setHasNext(data.hasNext);
  }, [cursor, hasNext, channel]);

  const endRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || !hasNext) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          fetchData();
        }
      });

      observer.current.observe(node);
    },
    [fetchData, hasNext],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-x-[3%] md:gap-x-[2%] gap-y-4 md:gap-y-5 md:w-[46.25rem] mx-auto px-3 py-5 md:px-0">
        <Card lists={lists} />
        {hasNext && <div ref={endRef} className="w-full h-0.5" />}
      </div>
    </div>
  );
}

export default ListContainer;
