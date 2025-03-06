'use client';

import Image from 'next/image';
import { useState } from 'react';
import SkeletonImage from '../Skeleton/SkeletonImage';

interface LazyImageProps {
  thumbnail: string;
  alt: string;
  sizes: string;
}

function LazyImage({ thumbnail, alt, sizes }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <SkeletonImage />}
      <Image
        src={thumbnail}
        className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
        fill
        sizes={sizes}
        alt={alt}
        priority
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default LazyImage;
