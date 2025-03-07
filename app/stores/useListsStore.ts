import { create } from 'zustand';
import { YoutubeData } from '@/app/types/youtube';

interface ListsStore {
  lists: Record<string, YoutubeData[]>;
  cursors: Record<string, number | null>;
  hasNexts: Record<string, boolean>;

  setLists: (channel: string, newLists: YoutubeData[]) => void;
  setCursor: (channel: string, cursor: number | null) => void;
  setHasNext: (channel: string, hasNext: boolean) => void;
}

const useListsStore = create<ListsStore>((set) => ({
  lists: {},
  cursors: {},
  hasNexts: {},

  setLists: (channel, newLists) =>
    set((state) => ({
      lists: { ...state.lists, [channel]: newLists },
    })),

  setCursor: (channel, cursor) =>
    set((state) => ({
      cursors: { ...state.cursors, [channel]: cursor },
    })),

  setHasNext: (channel, hasNext) =>
    set((state) => ({
      hasNexts: { ...state.hasNexts, [channel]: hasNext },
    })),
}));

export default useListsStore;
