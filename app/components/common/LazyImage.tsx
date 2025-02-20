'use client';

import Image from 'next/image';
import { useState } from 'react';
import SkeletonImage from '../Skeleton/SkeletonImage';

interface LazyImageProps {
  thumbnail: string;
  alt: string;
}

function LazyImage({ thumbnail, alt }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <SkeletonImage />}
      <Image
        src={thumbnail}
        className="object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
        fill
        sizes="(max-width: 768px) 50vw, 32vw"
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default LazyImage;
