import { useCallback, useEffect } from 'react';
import { ChannelResponse } from '@/app/types/youtube';
import axios from '@/app/lib/instance';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import useListsStore from '@/app/stores/useListsStore';

const useFetchData = (
  channel: string,
  initialHasNext: boolean,
  nextCursor: number | null,
) => {
  const {
    lists,
    cursors,
    hasNexts,
    setLists,
    setCursor,
    setHasNext,
    initializeState,
  } = useListsStore();

  useEffect(() => {
    initializeState();
  }, [initializeState]);

  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem('youtubeData');
    const hasStoreData = sessionStorageData
      ? JSON.parse(sessionStorageData)
      : null;

    if (!hasStoreData || !hasStoreData.lists[channel]) {
      if (!lists[channel]) {
        setLists(channel, []);
      }
      if (cursors[channel] === undefined) {
        setCursor(channel, nextCursor);
      }
      if (hasNexts[channel] === undefined) {
        setHasNext(channel, initialHasNext);
      }
    }
  }, [
    channel,
    initialHasNext,
    nextCursor,
    lists,
    cursors,
    hasNexts,
    setLists,
    setCursor,
    setHasNext,
  ]);

  const fetchData = useCallback(async () => {
    if (!hasNexts[channel]) return;

    const { data } = await axios.get<ChannelResponse>(channel, {
      params: { limit: 12, cursor: cursors[channel] },
    });

    setLists(channel, [...(lists[channel] || []), ...data.lists]);
    setCursor(channel, data.nextCursor);
    setHasNext(channel, data.hasNext);
  }, [channel, lists, cursors, hasNexts, setLists, setCursor, setHasNext]);

  const endRef = useIntersectionObserver(fetchData, hasNexts[channel]);

  return {
    lists: lists[channel] || [],
    hasNext: hasNexts[channel] || false,
    endRef,
  };
};

export default useFetchData;
