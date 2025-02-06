'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';

function VideoPlayer({ videoId, lazy }: { videoId: string; lazy: string }) {
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
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          onReady={() => setIsLoaded(true)}
        />
      )}
    </>
  );
}

export default VideoPlayer;
