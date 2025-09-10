'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analyticsConfig } from '@/lib/analytics/config';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analyticsConfig.ga4.enabled || !analyticsConfig.ga4.measurementId) {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4.measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      // eslint-disable-next-line prefer-rest-params
      (window as any).dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', analyticsConfig.ga4.measurementId, {
      page_path: pathname + searchParams.toString(),
    });

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="googletagmanager"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (!analyticsConfig.ga4.enabled || !analyticsConfig.ga4.measurementId) {
      return;
    }

    const url = pathname + searchParams.toString();
    window.gtag?.('config', analyticsConfig.ga4.measurementId, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

// Facebook Pixel Component
export function FacebookPixel() {
  useEffect(() => {
    if (!analyticsConfig.facebook.enabled || !analyticsConfig.facebook.pixelId) {
      return;
    }

    // Load Facebook Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${analyticsConfig.facebook.pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="connect.facebook.net"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
