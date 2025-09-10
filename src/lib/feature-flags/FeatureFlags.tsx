'use client';

import { createContext, useContext, ReactNode } from 'react';

// Feature flag configuration
export interface FeatureFlags {
  // Analytics features
  analytics: boolean;
  errorTracking: boolean;
  performanceMonitoring: boolean;

  // UI features
  heroAnimations: boolean;
  lightboxGallery: boolean;
  caseStudies: boolean;

  // Experimental features
  betaFeatures: boolean;
  newComponents: boolean;
}

const defaultFlags: FeatureFlags = {
  analytics: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  errorTracking: process.env.NEXT_PUBLIC_FEATURE_ERROR_TRACKING === 'true',
  performanceMonitoring: process.env.NEXT_PUBLIC_FEATURE_PERFORMANCE_MONITORING === 'true',
  heroAnimations: true,
  lightboxGallery: true,
  caseStudies: true,
  betaFeatures: false,
  newComponents: false,
};

const FeatureFlagsContext = createContext<FeatureFlags>(defaultFlags);

interface FeatureFlagsProviderProps {
  children: ReactNode;
  flags?: Partial<FeatureFlags>;
}

export function FeatureFlagsProvider({
  children,
  flags = {}
}: FeatureFlagsProviderProps) {
  const mergedFlags = { ...defaultFlags, ...flags };

  return (
    <FeatureFlagsContext.Provider value={mergedFlags}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export function useFeatureFlags(): FeatureFlags {
  const context = useContext(FeatureFlagsContext);
  if (!context) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider');
  }
  return context;
}

// Hook para verificar se uma feature está habilitada
export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
  const flags = useFeatureFlags();
  return flags[flag];
}

// Componente condicional baseado em feature flag
interface FeatureGateProps {
  flag: keyof FeatureFlags;
  children: ReactNode;
  fallback?: ReactNode;
}

export function FeatureGate({ flag, children, fallback = null }: FeatureGateProps) {
  const isEnabled = useFeatureFlag(flag);
  return isEnabled ? <>{children}</> : <>{fallback}</>;
}

// Hook para feature flags com valor padrão
export function useFeatureFlagValue<T>(
  flag: keyof FeatureFlags,
  defaultValue: T,
  enabledValue: T
): T {
  const isEnabled = useFeatureFlag(flag);
  return isEnabled ? enabledValue : defaultValue;
}
