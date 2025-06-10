import React from 'react';

interface AnimatedVideoProps {
  webmSrc: string;
  mp4Src: string;
  fallbackSrc: string;
  className?: string;
  width?: number;
  height?: number;
  alt: string;
}

export const AnimatedVideo: React.FC<AnimatedVideoProps> = ({
  webmSrc,
  mp4Src,
  fallbackSrc,
  className = '',
  width,
  height,
  alt,
}) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className}
      width={width}
      height={height}
      aria-label={alt}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
      <img src={fallbackSrc} alt={alt} className={className} width={width} height={height} />
    </video>
  );
};
