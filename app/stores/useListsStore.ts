import { create } from 'zustand';
import { YoutubeData } from '@/app/types/youtube';

interface ListsStore {
  lists: Record<string, YoutubeData[]>;
  cursors: Record<string, number | null>;
  hasNexts: Record<string, boolean>;

  initializeState: () => void;
  setLists: (channel: string, newLists: YoutubeData[]) => void;
  setCursor: (channel: string, cursor: number | null) => void;
  setHasNext: (channel: string, hasNext: boolean) => void;
}

const useListsStore = create<ListsStore>((set) => ({
  lists: {},
  cursors: {},
  hasNexts: {},

  initializeState: () => {
    const sessionStorageData = sessionStorage.getItem('youtubeData');
    if (sessionStorageData) {
      const { lists, cursors, hasNexts } = JSON.parse(sessionStorageData);
      set({ lists, cursors, hasNexts });
    }
  },

  setLists: (channel, newLists) =>
    set((state) => {
      const updatedLists = { ...state.lists, [channel]: newLists };
      sessionStorage.setItem(
        'youtubeData',
        JSON.stringify({ ...state, lists: updatedLists }),
      );
      return { lists: updatedLists };
    }),

  setCursor: (channel, cursor) =>
    set((state) => {
      const updatedCursors = { ...state.cursors, [channel]: cursor };
      sessionStorage.setItem(
        'youtubeData',
        JSON.stringify({ ...state, cursors: updatedCursors }),
      );
      return { cursors: updatedCursors };
    }),

  setHasNext: (channel, hasNext) =>
    set((state) => {
      const updatedHasNexts = { ...state.hasNexts, [channel]: hasNext };
      sessionStorage.setItem(
        'youtubeData',
        JSON.stringify({ ...state, hasNexts: updatedHasNexts }),
      );
      return { hasNexts: updatedHasNexts };
    }),
}));

export default useListsStore;
