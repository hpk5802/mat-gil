'use client';

import Image from 'next/image';
import { useState } from 'react';

function VideoPlayer({ videoId, lazy }: { videoId: string; lazy: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Image fill src={lazy} alt="대체 이미지" />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
}

export default VideoPlayer;
