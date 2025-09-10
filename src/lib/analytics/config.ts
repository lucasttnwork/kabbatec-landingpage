// Analytics Configuration
export const analyticsConfig = {
  // Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA_ID,
    enabled: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  },

  // Google Tag Manager
  gtm: {
    containerId: process.env.NEXT_PUBLIC_GTM_ID,
    enabled: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  },

  // Facebook Pixel
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    enabled: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  },

  // Vercel Analytics
  vercel: {
    enabled: true, // Always enabled on Vercel
  },
};

// Performance Monitoring
export const monitoringConfig = {
  // Error tracking
  errorTracking: {
    enabled: process.env.NEXT_PUBLIC_FEATURE_ERROR_TRACKING === 'true',
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  // Performance monitoring
  performance: {
    enabled: process.env.NEXT_PUBLIC_FEATURE_PERFORMANCE_MONITORING === 'true',
    sampleRate: 0.1, // 10% of sessions
  },
};

// Feature Flags
export const featureFlags = {
  analytics: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  errorTracking: process.env.NEXT_PUBLIC_FEATURE_ERROR_TRACKING === 'true',
  performanceMonitoring: process.env.NEXT_PUBLIC_FEATURE_PERFORMANCE_MONITORING === 'true',
};
