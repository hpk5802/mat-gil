import { useCallback, useState } from 'react';
import { ChannelResponse, YoutubeData } from '../types/youtube';
import axios from '@/app/lib/instance';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';

const useFetchData = (
  channel: string,
  initialLists: YoutubeData[],
  initialHasNext: boolean,
  nextCursor: number | null,
) => {
  const [lists, setLists] = useState<YoutubeData[]>(initialLists);
  const [cursor, setCursor] = useState(nextCursor);
  const [hasNext, setHasNext] = useState(initialHasNext);

  const fetchData = useCallback(async () => {
    if (!hasNext) return;

    const { data } = await axios.get<ChannelResponse>(channel, {
      params: { limit: 12, cursor },
    });

    setLists((prev) => [...prev, ...data.lists]);
    setCursor(data.nextCursor);
    setHasNext(data.hasNext);
  }, [cursor, hasNext, channel]);

  const endRef = useIntersectionObserver(fetchData, hasNext);

  return { lists, hasNext, endRef };
};

export default useFetchData;
