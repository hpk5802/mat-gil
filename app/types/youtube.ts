interface YoutubeData {
  youtubeTitle: string;
  videoId: string;
  position: number;
  thumbnail: string;
  location: string;
  category: string | string[];
  address: string;
  title: string;
  menu: string[];
  timeline: string;
}

interface ChannelResponse {
  success: boolean;
  lists: YoutubeData[];
  hasNext: boolean;
  nextCursor: number | null;
}

export type { YoutubeData, ChannelResponse };
