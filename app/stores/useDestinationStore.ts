import { create } from 'zustand';

interface DestinationData {
  latitude: number;
  longitude: number;
}

interface DestinationStore {
  destinationData: DestinationData | null;
  setDestinationData: (data: DestinationData) => void;
}

const useDestinationStore = create<DestinationStore>((set) => ({
  destinationData: null,
  setDestinationData: (data) => set({ destinationData: data }),
}));

export default useDestinationStore;
