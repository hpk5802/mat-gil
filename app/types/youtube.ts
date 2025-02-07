interface Thumbnail {
  url: string;
}

interface Thumbnails {
  high: Thumbnail;
}

interface Snippet {
  position: number;
  title: string;
  thumbnails: Thumbnails;
  description: string;
  resourceId: {
    videoId: string;
  };
}

interface RawYoutubeData {
  id: string;
  snippet: Snippet;
}

interface YoutubeData {
  id: string;
  position: number;
  title: string;
  thumbnailUrl: string;
  description: string;
  videoId: string;
}

export type { RawYoutubeData, YoutubeData };
