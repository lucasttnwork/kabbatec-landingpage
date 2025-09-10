// CDN Configuration for Kabbatec Landing
// This file centralizes CDN settings and can be easily updated for production

export interface CDNConfig {
  enabled: boolean;
  baseUrl: string;
  imageBaseUrl: string;
  regions: string[];
  fallbackEnabled: boolean;
  cache: {
    maxAge: number;
    staleWhileRevalidate: number;
  };
}

export const cdnConfig: CDNConfig = {
  // Set to true when CDN is deployed
  enabled: process.env.NODE_ENV === 'production' && process.env.CDN_ENABLED === 'true',

  // CDN base URL - replace with your actual CDN domain
  baseUrl: process.env.CDN_BASE_URL || 'https://cdn.kabbatec.com',

  // Image-specific CDN URL (can be different from main CDN)
  imageBaseUrl: process.env.CDN_IMAGE_URL || 'https://images.kabbatec.com',

  // CDN regions for redundancy
  regions: [
    'us-east-1',
    'us-west-2',
    'eu-west-1',
  ],

  // Enable fallback to original URLs if CDN fails
  fallbackEnabled: true,

  // Cache configuration
  cache: {
    maxAge: 86400, // 24 hours
    staleWhileRevalidate: 604800, // 7 days
  },
};

// Utility functions for CDN URL generation
export class CDNUtils {
  static getImageUrl(originalPath: string): string {
    if (!cdnConfig.enabled) {
      return originalPath;
    }

    // Remove leading slash if present
    const cleanPath = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;

    // Construct CDN URL
    return `${cdnConfig.imageBaseUrl}/${cleanPath}`;
  }

  static getAssetUrl(originalPath: string): string {
    if (!cdnConfig.enabled) {
      return originalPath;
    }

    const cleanPath = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;
    return `${cdnConfig.baseUrl}/${cleanPath}`;
  }

  static getOptimizedImageUrl(
    originalPath: string,
    options: {
      width?: number;
      height?: number;
      quality?: number;
      format?: 'webp' | 'avif' | 'jpg' | 'png';
    } = {}
  ): string {
    const baseUrl = this.getImageUrl(originalPath);

    if (!cdnConfig.enabled) {
      return baseUrl;
    }

    // Add optimization parameters for supported CDNs
    const params = new URLSearchParams();

    if (options.width) params.set('w', options.width.toString());
    if (options.height) params.set('h', options.height.toString());
    if (options.quality) params.set('q', options.quality.toString());
    if (options.format) params.set('f', options.format);

    const paramString = params.toString();
    return paramString ? `${baseUrl}?${paramString}` : baseUrl;
  }

  static getCacheHeaders(path: string) {
    if (!path.includes('/cases/') && !path.includes('/images/')) {
      return {};
    }

    return {
      'Cache-Control': `public, max-age=${cdnConfig.cache.maxAge}, stale-while-revalidate=${cdnConfig.cache.staleWhileRevalidate}`,
      'CDN-Cache-Control': `max-age=${cdnConfig.cache.maxAge}`,
    };
  }

  static isCDNEnabled(): boolean {
    return cdnConfig.enabled;
  }

  static getCDNRegions(): string[] {
    return cdnConfig.regions;
  }
}

// Environment variable validation
export function validateCDNConfig(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (cdnConfig.enabled) {
    if (!process.env.CDN_BASE_URL) {
      errors.push('CDN_BASE_URL environment variable is required when CDN is enabled');
    }

    if (!process.env.CDN_IMAGE_URL) {
      errors.push('CDN_IMAGE_URL environment variable is required when CDN is enabled');
    }

    // Validate URLs
    try {
      if (process.env.CDN_BASE_URL) new URL(process.env.CDN_BASE_URL);
      if (process.env.CDN_IMAGE_URL) new URL(process.env.CDN_IMAGE_URL);
    } catch {
      errors.push('CDN URLs must be valid URLs');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
