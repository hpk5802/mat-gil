'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import convertTimeToSeconds from '@/app/utils/convertTimeToSeconds';
import LazyImage from '../common/LazyImage';

interface VideoPlayerProps {
  videoId: string;
  lazy: string;
  timeline?: string;
}

function VideoPlayer({ videoId, lazy, timeline }: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <>
      {!isLoaded && <LazyImage thumbnail={lazy} alt="Video Thumbnail" />}
      {isClient && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}&showinfo=0&enablejsapi=1&origin=origin=${
            process.env.NEXT_PUBLIC_BASE_URL
          }${timeline && `&start=${convertTimeToSeconds(timeline)}`}}`}
          controls
          width="100%"
          height="100%"
          muted
          onReady={() => setIsLoaded(true)}
        />
      )}
    </>
  );
}

export default VideoPlayer;
