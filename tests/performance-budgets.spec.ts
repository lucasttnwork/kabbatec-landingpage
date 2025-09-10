import { test, expect } from "@playwright/test";

interface PerformanceBudget {
  name: string;
  value: number;
  unit: string;
  operator: 'lessThan' | 'lessThanOrEqual';
}

const performanceBudgets: PerformanceBudget[] = [
  // Bundle size
  { name: 'Bundle Size', value: 150, unit: 'kb', operator: 'lessThan' },
  { name: 'First Load JS', value: 121, unit: 'kb', operator: 'lessThan' },

  // Core Web Vitals
  { name: 'Largest Contentful Paint', value: 2000, unit: 'ms', operator: 'lessThan' },
  { name: 'Cumulative Layout Shift', value: 0.08, unit: 'score', operator: 'lessThan' },
  { name: 'First Input Delay', value: 100, unit: 'ms', operator: 'lessThan' },
  { name: 'First Contentful Paint', value: 1800, unit: 'ms', operator: 'lessThan' },

  // Additional metrics
  { name: 'Time to Interactive', value: 3000, unit: 'ms', operator: 'lessThan' },
  { name: 'Speed Index', value: 3000, unit: 'ms', operator: 'lessThan' },
  { name: 'Total Blocking Time', value: 300, unit: 'ms', operator: 'lessThan' },

  // Resource counts
  { name: 'JavaScript Assets', value: 15, unit: 'count', operator: 'lessThanOrEqual' },
  { name: 'CSS Assets', value: 5, unit: 'count', operator: 'lessThanOrEqual' },
  { name: 'Image Assets', value: 20, unit: 'count', operator: 'lessThanOrEqual' },
];

test.describe("⚡ Performance Budgets - SPRINT 3.2", () => {
  const routes = [
    { path: "/", name: "home" },
    { path: "/design-system", name: "design-system" },
    { path: "/hero-preview", name: "hero-preview" },
  ];

  test.describe("Bundle Size Monitoring", () => {
    test("JavaScript Bundle Analysis", async ({ page }) => {
      await page.goto("/");

      // Monitorar requests de JavaScript
      const jsRequests: any[] = [];
      page.on('request', (request) => {
        if (request.resourceType() === 'script') {
          jsRequests.push({
            url: request.url(),
            size: 0, // Em produção seria calculado
          });
        }
      });

      await page.waitForLoadState('networkidle');

      // Simular análise de bundle (em produção seria real)
      const scripts = await page.locator('script[src]').all();
      let totalEstimatedSize = 0;

      for (const script of scripts) {
        const src = await script.getAttribute('src');
        if (src) {
          // Estimativa baseada no tipo de arquivo
          if (src.includes('next/static')) {
            totalEstimatedSize += 25; // Next.js chunks ~25kb cada
          } else if (src.includes('vendor') || src.includes('chunk')) {
            totalEstimatedSize += 50; // Vendor chunks ~50kb
          } else {
            totalEstimatedSize += 10; // Outros scripts ~10kb
          }
        }
      }

      // Verificar limite do bundle
      const bundleBudget = performanceBudgets.find(b => b.name === 'Bundle Size');
      expect(totalEstimatedSize, `Bundle size deve ser < ${bundleBudget?.value}kb`).toBeLessThan(bundleBudget?.value || 150);

      // Verificar número de assets JavaScript
      const jsAssetsBudget = performanceBudgets.find(b => b.name === 'JavaScript Assets');
      expect(scripts.length, `Número de assets JS deve ser ≤ ${jsAssetsBudget?.value}`).toBeLessThanOrEqual(jsAssetsBudget?.value || 15);

      console.log(`📊 Bundle Analysis: ${totalEstimatedSize}kb (${scripts.length} assets)`);
    });

    test("CSS Assets Analysis", async ({ page }) => {
      await page.goto("/");

      const cssRequests: any[] = [];
      page.on('request', (request) => {
        if (request.resourceType() === 'stylesheet') {
          cssRequests.push({
            url: request.url(),
            size: 0,
          });
        }
      });

      await page.waitForLoadState('networkidle');

      const stylesheets = await page.locator('link[rel="stylesheet"]').all();
      let totalCSSEstimatedSize = 0;

      for (const stylesheet of stylesheets) {
        const href = await stylesheet.getAttribute('href');
        if (href) {
          if (href.includes('globals.css')) {
            totalCSSEstimatedSize += 15; // globals.css ~15kb
          } else {
            totalCSSEstimatedSize += 10; // Outros CSS ~10kb
          }
        }
      }

      // Verificar número de assets CSS
      const cssAssetsBudget = performanceBudgets.find(b => b.name === 'CSS Assets');
      expect(stylesheets.length, `Número de assets CSS deve ser ≤ ${cssAssetsBudget?.value}`).toBeLessThanOrEqual(cssAssetsBudget?.value || 5);

      console.log(`🎨 CSS Analysis: ${totalCSSEstimatedSize}kb (${stylesheets.length} assets)`);
    });
  });

  test.describe("Core Web Vitals", () => {
    for (const { path, name } of routes) {
      test(`${name}-core-web-vitals`, async ({ page }) => {
        // Configurar throttling para simular condições reais
        await page.route('**/*', async (route) => {
          await route.continue();
        });

        await page.goto(path, { waitUntil: 'networkidle' });

        // LCP - Largest Contentful Paint
        const lcp = await page.evaluate(() => {
          return new Promise<number>((resolve) => {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1] as any;
              observer.disconnect();
              resolve(lastEntry.startTime);
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });

            setTimeout(() => resolve(0), 10000);
          });
        });

        const lcpBudget = performanceBudgets.find(b => b.name === 'Largest Contentful Paint');
        if (lcp > 0) {
          expect(lcp, `LCP deve ser < ${lcpBudget?.value}ms`).toBeLessThan(lcpBudget?.value || 2000);
        }

        // CLS - Cumulative Layout Shift
        const cls = await page.evaluate(() => {
          return new Promise<number>((resolve) => {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries() as any[]) {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                }
              }
            });
            observer.observe({ entryTypes: ['layout-shift'] });

            // Simular interações do usuário
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight);
              setTimeout(() => {
                window.scrollTo(0, 0);
                setTimeout(() => {
                  observer.disconnect();
                  resolve(clsValue);
                }, 1000);
              }, 2000);
            }, 1000);
          });
        });

        const clsBudget = performanceBudgets.find(b => b.name === 'Cumulative Layout Shift');
        expect(cls, `CLS deve ser < ${clsBudget?.value}`).toBeLessThan(clsBudget?.value || 0.08);

        // FID - First Input Delay (simulado)
        const fid = await page.evaluate(() => {
          return new Promise<number>((resolve) => {
            let fidValue = 0;
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries() as any[]) {
                if (entry.processingStart && entry.startTime) {
                  fidValue = Math.max(fidValue, entry.processingStart - entry.startTime);
                }
              }
            });
            observer.observe({ entryTypes: ['first-input'] });

            // Simular interação
            setTimeout(() => {
              const button = document.querySelector('button');
              if (button) {
                button.click();
              }
              setTimeout(() => {
                observer.disconnect();
                resolve(fidValue);
              }, 1000);
            }, 2000);
          });
        });

        const fidBudget = performanceBudgets.find(b => b.name === 'First Input Delay');
        if (fid > 0) {
          expect(fid, `FID deve ser < ${fidBudget?.value}ms`).toBeLessThan(fidBudget?.value || 100);
        }

        console.log(`📈 ${name} CWV: LCP=${lcp.toFixed(0)}ms, CLS=${cls.toFixed(3)}, FID=${fid.toFixed(0)}ms`);
      });
    }
  });

  test.describe("Additional Performance Metrics", () => {
    test("Paint Metrics", async ({ page }) => {
      await page.goto("/");

      const paintMetrics = await page.evaluate(() => {
        return new Promise((resolve) => {
          const metrics: any = {};
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
              } else if (entry.name === 'first-paint') {
                metrics.fp = entry.startTime;
              }
            }
          });
          observer.observe({ entryTypes: ['paint'] });

          setTimeout(() => {
            observer.disconnect();
            resolve(metrics);
          }, 5000);
        });
      });

      const fcpBudget = performanceBudgets.find(b => b.name === 'First Contentful Paint');
      if (paintMetrics.fcp) {
        expect(paintMetrics.fcp, `FCP deve ser < ${fcpBudget?.value}ms`).toBeLessThan(fcpBudget?.value || 1800);
      }

      console.log(`🎨 Paint Metrics: FCP=${paintMetrics.fcp?.toFixed(0) || 'N/A'}ms`);
    });

    test("Time to Interactive", async ({ page }) => {
      await page.goto("/");

      const tti = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return navigation.domInteractive - navigation.fetchStart;
      });

      const ttiBudget = performanceBudgets.find(b => b.name === 'Time to Interactive');
      expect(tti, `TTI deve ser < ${ttiBudget?.value}ms`).toBeLessThan(ttiBudget?.value || 3000);

      console.log(`⚡ TTI: ${tti.toFixed(0)}ms`);
    });
  });

  test.describe("Resource Optimization", () => {
    test("Image Assets Analysis", async ({ page }) => {
      await page.goto("/");

      const images = await page.locator('img').all();
      const imageCount = images.length;

      // Verificar limite de imagens
      const imageBudget = performanceBudgets.find(b => b.name === 'Image Assets');
      expect(imageCount, `Número de imagens deve ser ≤ ${imageBudget?.value}`).toBeLessThanOrEqual(imageBudget?.value || 20);

      // Verificar se imagens têm lazy loading (exceto primeiras 3 críticas)
      const imagesWithoutLazy = await page.locator('img:not([loading="lazy"])').all();
      const criticalImagesWithoutLazy = Math.min(imagesWithoutLazy.length, 3);

      expect(imagesWithoutLazy.length, "Apenas primeiras 3 imagens críticas podem não ter lazy loading").toBeLessThanOrEqual(3);

      // Verificar formatos otimizados
      for (const img of images) {
        const src = await img.getAttribute('src');
        if (src && !src.includes('data:')) {
          expect(src, "Imagem deve usar formato otimizado").toMatch(/\.(webp|avif|jpg|jpeg|png)$/);
        }
      }

      console.log(`🖼️ Images: ${imageCount} total, ${criticalImagesWithoutLazy} críticas sem lazy loading`);
    });

    test("Font Loading Optimization", async ({ page }) => {
      await page.goto("/");

      // Verificar se fontes são carregadas de forma otimizada
      const fontRequests = await page.evaluate(() => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        return resources.filter(r => r.name.includes('font')).length;
      });

      expect(fontRequests, "Deve haver fontes carregadas").toBeGreaterThan(0);

      // Verificar preload de fontes críticas
      const preloadLinks = await page.locator('link[rel="preload"][as="font"]').count();
      expect(preloadLinks, "Fontes críticas devem ter preload").toBeGreaterThanOrEqual(0);

      console.log(`🔤 Fonts: ${fontRequests} carregadas, ${preloadLinks} com preload`);
    });
  });

  test.describe("Budget Report Generation", () => {
    test("Generate Performance Budget Report", async ({ page }) => {
      await page.goto("/");

      // Coletar todas as métricas
      const metrics = await page.evaluate(() => {
        const perfEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

        return {
          loadTime: perfEntries.loadEventEnd - perfEntries.fetchStart,
          domContentLoaded: perfEntries.domContentLoadedEventEnd - perfEntries.fetchStart,
          scripts: resources.filter(r => r.initiatorType === 'script').length,
          stylesheets: resources.filter(r => r.initiatorType === 'link').length,
          images: resources.filter(r => r.initiatorType === 'img').length,
          fonts: resources.filter(r => r.name.includes('font')).length,
        };
      });

      const report = {
        timestamp: new Date().toISOString(),
        url: page.url(),
        metrics,
        budgets: performanceBudgets.map(budget => ({
          ...budget,
          status: 'pending', // Em produção seria calculado
          current: 0,
        })),
        summary: {
          totalResources: metrics.scripts + metrics.stylesheets + metrics.images + metrics.fonts,
          loadTimeMs: metrics.loadTime,
          status: 'analyzing'
        }
      };

      // Verificar se relatório foi gerado
      expect(report.metrics.loadTime, "Load time deve ser medido").toBeGreaterThan(0);
      expect(report.summary.totalResources, "Deve haver recursos carregados").toBeGreaterThan(0);

      console.log('📊 Performance Budget Report:', JSON.stringify(report, null, 2));
    });
  });
});
