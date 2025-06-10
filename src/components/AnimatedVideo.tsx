'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface AnimatedVideoProps {
  webmSrc: string;
  mp4Src: string;
  fallbackSrc: string;
  className?: string;
  width: number;
  height: number;
  alt: string;
}

const AnimatedVideo = ({
  webmSrc,
  mp4Src,
  fallbackSrc,
  className = '',
  width,
  height,
  alt,
}: AnimatedVideoProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const aspectRatio = width / height;

  useEffect(() => {
    // Reset error state when src changes
    setHasError(false);
    setIsLoading(true);
  }, [webmSrc, mp4Src]);

  if (hasError) {
    return (
      <div className={`relative ${className}`} style={{ aspectRatio }}>
        <Image
          src={fallbackSrc}
          alt={alt}
          fill
          priority
          sizes={`(max-width: ${width}px) 100vw, ${width}px`}
          className="object-contain"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ aspectRatio }}>
      <video
        className="w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        onError={() => setHasError(true)}
        onLoadedData={() => setIsLoading(false)}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
    </div>
  );
};

export default AnimatedVideo;
