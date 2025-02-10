'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import convertTimeToSeconds from '@/app/utils/convertTimeToSeconds';

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
      {!isLoaded && (
        <Image fill src={lazy} className="object-cover" alt="Video Thumbnail" />
      )}
      {isClient && (
        <ReactPlayer
          // url={`https://www.youtube.com/watch?v=${videoId}`}
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
