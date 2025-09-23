import * as React from 'react';
import Image from 'next/image';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  unoptimized?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  unoptimized = true,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      unoptimized={unoptimized}
      className={className}
    />
  );
};

export { OptimizedImage };