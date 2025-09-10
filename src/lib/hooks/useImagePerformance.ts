"use client";

import { useState, useCallback, useRef } from "react";

interface ImagePerformanceMetrics {
  loadTime: number;
  size: number;
  format: string;
  cached: boolean;
  dimensions: {
    width: number;
    height: number;
  };
}

interface UseImagePerformanceOptions {
  onLoad?: (metrics: ImagePerformanceMetrics) => void;
  onError?: (error: Error) => void;
  trackMetrics?: boolean;
}

export function useImagePerformance(options: UseImagePerformanceOptions = {}) {
  const [metrics, setMetrics] = useState<ImagePerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const startTimeRef = useRef<number>(0);

  const trackImageLoad = useCallback((img: HTMLImageElement) => {
    if (!options.trackMetrics) return;

    const endTime = performance.now();
    const loadTime = endTime - startTimeRef.current;

    const imageMetrics: ImagePerformanceMetrics = {
      loadTime,
      size: 0, // Would need to be calculated differently
      format: img.src.split('.').pop() || 'unknown',
      cached: false, // Would need performance entries to detect
      dimensions: {
        width: img.naturalWidth,
        height: img.naturalHeight,
      },
    };

    setMetrics(imageMetrics);
    options.onLoad?.(imageMetrics);
  }, [options]);

  const handleLoadStart = useCallback(() => {
    startTimeRef.current = performance.now();
    setIsLoading(true);
    setHasError(false);
  }, []);

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    trackImageLoad(img);
    setIsLoading(false);
  }, [trackImageLoad]);

  const handleError = useCallback((error: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);

    const img = error.currentTarget;
    const errorObj = new Error(`Failed to load image: ${img.src}`);
    options.onError?.(errorObj);
  }, [options]);

  const reset = useCallback(() => {
    setMetrics(null);
    setIsLoading(false);
    setHasError(false);
    startTimeRef.current = 0;
  }, []);

  return {
    metrics,
    isLoading,
    hasError,
    handleLoadStart,
    handleLoad,
    handleError,
    reset,
  };
}

// Utility function to log performance metrics
export function logImagePerformance(src: string, metrics: ImagePerformanceMetrics) {
  console.log(`📊 Image Performance - ${src}:`, {
    'Load Time': `${metrics.loadTime.toFixed(2)}ms`,
    'Dimensions': `${metrics.dimensions.width}x${metrics.dimensions.height}`,
    'Format': metrics.format,
    'Cached': metrics.cached ? 'Yes' : 'No',
  });
}

// Hook for tracking overall image loading performance across the app
export function useImagePerformanceTracker() {
  const [totalImages, setTotalImages] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [averageLoadTime, setAverageLoadTime] = useState(0);
  const loadTimesRef = useRef<number[]>([]);

  const trackImage = useCallback((metrics: ImagePerformanceMetrics) => {
    setTotalImages(prev => prev + 1);
    setLoadedImages(prev => prev + 1);

    loadTimesRef.current.push(metrics.loadTime);
    const avg = loadTimesRef.current.reduce((a, b) => a + b, 0) / loadTimesRef.current.length;
    setAverageLoadTime(avg);
  }, []);

  const getPerformanceReport = useCallback(() => {
    return {
      totalImages,
      loadedImages,
      failedImages: totalImages - loadedImages,
      averageLoadTime,
      successRate: totalImages > 0 ? (loadedImages / totalImages) * 100 : 0,
    };
  }, [totalImages, loadedImages, averageLoadTime]);

  return {
    trackImage,
    getPerformanceReport,
  };
}
