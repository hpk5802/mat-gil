'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import convertTimeToSeconds from '@/app/utils/convertTimeToSeconds';
import LazyImage from '../common/LazyImage';

interface VideoPlayerProps {
  videoId: string;
  lazy: string;
  timeline?: string;
  title: string;
}

function VideoPlayer({ videoId, lazy, timeline, title }: VideoPlayerProps) {
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
        <LazyImage thumbnail={lazy} alt={`영상 썸네일: ${title}`} />
      )}
      {isClient && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}&showinfo=0&enablejsapi=1&origin=origin=${
            process.env.NEXT_PUBLIC_BASE_URL
          }${timeline && `&start=${convertTimeToSeconds(timeline)}`}}`}
          controls
          width="100%"
          height="100%"
          muted
          config={{
            youtube: {
              playerVars: {
                cc_load_policy: 1,
                cc_lang_pref: 'ko',
              },
            },
          }}
          onReady={() => setIsLoaded(true)}
        />
      )}
    </>
  );
}

export default VideoPlayer;
