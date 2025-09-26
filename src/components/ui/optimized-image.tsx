import * as React from 'react';
import Image, { ImageProps } from 'next/image';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  unoptimized?: boolean;
  placeholder?: ImageProps['placeholder'];
  blurDataURL?: string;
  priority?: boolean;
  /**
   * URL para usar como fallback caso a imagem principal falhe.
   * Idealmente de um banco gratuito (ex.: picsum.photos, unsplash, pexels).
   */
  fallbackSrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 400,
  height = 300,
  fill = false,
  sizes,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  unoptimized = true,
  placeholder,
  blurDataURL,
  priority = false,
  fallbackSrc,
}) => {
  const [currentSrc, setCurrentSrc] = React.useState<string>(src);
  const [didFallback, setDidFallback] = React.useState<boolean>(false);

  // Fallback padrão: utiliza picsum.photos com uma seed estável
  const defaultFallback = React.useMemo(() => {
    const seed = encodeURIComponent(alt || 'placeholder');
    // usa resolução maior para melhor qualidade; será contida via CSS
    return `https://picsum.photos/seed/${seed}/1200/800`;
  }, [alt]);

  const handleError = () => {
    if (didFallback) return; // evita loop de erro
    setDidFallback(true);
    setCurrentSrc(fallbackSrc || defaultFallback);
  };

  return (
    <Image
      src={currentSrc}
      alt={alt}
      {...(fill ? { fill: true } : { width, height })}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      unoptimized={unoptimized}
      className={className}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      priority={priority}
      onError={handleError}
    />
  );
};

export { OptimizedImage };