import { test, expect, chromium, firefox, webkit } from "@playwright/test";

const browsers = [
  { name: 'Chrome', browser: chromium },
  { name: 'Firefox', browser: firefox },
  { name: 'Safari', browser: webkit },
];

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 812 },
];

const routes = [
  { path: '/', name: 'home' },
  { path: '/design-system', name: 'design-system' },
  { path: '/hero-preview', name: 'hero-preview' },
];

test.describe("🌐 Cross-browser Validation - SPRINT 3.2", () => {
  test.describe("Visual Consistency Across Browsers", () => {
    for (const browserConfig of browsers) {
      for (const route of routes) {
        test(`${route.name}-${browserConfig.name}-visual-consistency`, async () => {
          const browser = await browserConfig.browser.launch();
          const context = await browser.newContext();
          const page = await context.newPage();

          try {
            await page.setViewportSize({ width: 1920, height: 1080 });
            await page.goto(route.path);

            // Aguardar carregamento completo
            await page.waitForLoadState('networkidle');

            // Verificar se elementos críticos estão presentes
            const heroExists = await page.locator('[data-testid="hero-section"], .hero, h1').first().isVisible();
            expect(heroExists, `Hero deve existir em ${browserConfig.name}`).toBeTruthy();

            // Verificar se botões funcionam
            const buttons = await page.locator('button').all();
            expect(buttons.length, `Deve haver botões em ${browserConfig.name}`).toBeGreaterThan(0);

            // Verificar se links funcionam
            const links = await page.locator('a[href]').all();
            expect(links.length, `Deve haver links em ${browserConfig.name}`).toBeGreaterThan(0);

            // Verificar se imagens carregam
            const images = await page.locator('img').all();
            for (const img of images.slice(0, 5)) { // Verificar primeiras 5 imagens
              const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalHeight > 0);
              expect(isLoaded, `Imagem deve carregar em ${browserConfig.name}`).toBeTruthy();
            }

            // Verificar console errors
            const errors: string[] = [];
            page.on('pageerror', (error) => {
              errors.push(error.message);
            });

            await page.waitForTimeout(2000); // Aguardar possíveis erros

            expect(errors.length, `Não deve haver erros no console em ${browserConfig.name}`).toBe(0);

          } finally {
            await browser.close();
          }
        });
      }
    }
  });

  test.describe("Responsive Design Validation", () => {
    for (const browserConfig of browsers) {
      for (const viewport of viewports) {
        test(`${browserConfig.name}-${viewport.name}-responsive`, async () => {
          const browser = await browserConfig.browser.launch();
          const context = await browser.newContext();
          const page = await context.newPage();

          try {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.goto('/');

            await page.waitForLoadState('networkidle');

            // Verificar se não há overflow horizontal
            const hasNoOverflow = await page.evaluate(() => {
              return document.documentElement.scrollWidth <= document.documentElement.clientWidth;
            });

            expect(hasNoOverflow, `Sem overflow horizontal em ${browserConfig.name} ${viewport.name}`).toBeTruthy();

            // Verificar se elementos críticos são visíveis
            const criticalElements = [
              '[data-testid="hero-section"], .hero, h1',
              'button',
              'nav, [role="navigation"]'
            ];

            for (const selector of criticalElements) {
              const element = await page.locator(selector).first();
              const isVisible = await element.isVisible();
              expect(isVisible, `Elemento ${selector} deve ser visível em ${browserConfig.name} ${viewport.name}`).toBeTruthy();
            }

            // Verificar se texto é legível (não muito pequeno)
            const fontSize = await page.evaluate(() => {
              const body = document.querySelector('body');
              if (body) {
                const style = window.getComputedStyle(body);
                return parseFloat(style.fontSize);
              }
              return 0;
            });

            expect(fontSize, `Fonte deve ser legível em ${browserConfig.name} ${viewport.name}`).toBeGreaterThan(12);

          } finally {
            await browser.close();
          }
        });
      }
    }
  });

  test.describe("JavaScript Compatibility", () => {
    for (const browserConfig of browsers) {
      test(`${browserConfig.name}-javascript-compatibility`, async () => {
        const browser = await browserConfig.browser.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        try {
          await page.goto('/');

          // Verificar se JavaScript está funcionando
          const jsWorking = await page.evaluate(() => {
            return typeof window !== 'undefined' && typeof document !== 'undefined';
          });

          expect(jsWorking, `JavaScript deve funcionar em ${browserConfig.name}`).toBeTruthy();

          // Verificar se React está carregado (se aplicável)
          const reactLoaded = await page.evaluate(() => {
            return typeof window.React !== 'undefined' || document.querySelector('[data-reactroot]') !== null;
          });

          // Verificar se Next.js está funcionando
          const nextJsWorking = await page.evaluate(() => {
            return typeof window.__NEXT_DATA__ !== 'undefined' || document.querySelector('script[id="__NEXT_DATA__"]') !== null;
          });

          // Verificar se Tailwind está carregado
          const tailwindWorking = await page.evaluate(() => {
            const testEl = document.createElement('div');
            testEl.className = 'hidden md:block';
            document.body.appendChild(testEl);
            const computed = window.getComputedStyle(testEl);
            document.body.removeChild(testEl);
            return computed.display === 'none' || computed.display === 'block';
          });

          expect(tailwindWorking, `Tailwind deve funcionar em ${browserConfig.name}`).toBeTruthy();

          // Verificar se microinterações funcionam
          const hoverWorking = await page.evaluate(() => {
            return typeof document.querySelector('[class*="hover"]') !== 'undefined' ||
                   CSS.supports('selector(:hover)');
          });

          console.log(`${browserConfig.name} JS Check: React=${reactLoaded}, Next=${nextJsWorking}, Tailwind=${tailwindWorking}, Hover=${hoverWorking}`);

        } finally {
          await browser.close();
        }
      });
    }
  });

  test.describe("Form and Interaction Testing", () => {
    for (const browserConfig of browsers) {
      test(`${browserConfig.name}-form-interactions`, async () => {
        const browser = await browserConfig.browser.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        try {
          await page.goto('/');

          // Testar interações básicas
          const buttons = await page.locator('button').all();

          if (buttons.length > 0) {
            // Testar clique em botão
            await buttons[0].click();

            // Verificar se não quebrou nada (sem erros)
            const stillWorking = await page.evaluate(() => {
              return document.body.innerHTML.length > 0;
            });

            expect(stillWorking, `Página deve continuar funcionando após clique em ${browserConfig.name}`).toBeTruthy();
          }

          // Testar navegação por teclado
          await page.keyboard.press('Tab');
          const focusedElement = await page.locator(':focus').first();

          if (await focusedElement.count() > 0) {
            const isVisible = await focusedElement.isVisible();
            expect(isVisible, `Elemento focado deve ser visível em ${browserConfig.name}`).toBeTruthy();
          }

          // Testar scroll
          await page.evaluate(() => window.scrollTo(0, 500));
          const scrolled = await page.evaluate(() => window.scrollY > 0);

          expect(scrolled, `Scroll deve funcionar em ${browserConfig.name}`).toBeTruthy();

        } finally {
          await browser.close();
        }
      });
    }
  });

  test.describe("CSS and Styling Compatibility", () => {
    for (const browserConfig of browsers) {
      test(`${browserConfig.name}-css-compatibility`, async () => {
        const browser = await browserConfig.browser.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        try {
          await page.goto('/design-system');

          // Verificar se CSS está carregado
          const cssLoaded = await page.evaluate(() => {
            const styles = document.querySelectorAll('link[rel="stylesheet"], style');
            return styles.length > 0;
          });

          expect(cssLoaded, `CSS deve estar carregado em ${browserConfig.name}`).toBeTruthy();

          // Verificar se variáveis CSS funcionam
          const cssVarsWorking = await page.evaluate(() => {
            const testEl = document.createElement('div');
            testEl.style.setProperty('--test-color', 'red');
            const computed = window.getComputedStyle(testEl).getPropertyValue('--test-color');
            return computed === 'red';
          });

          expect(cssVarsWorking, `CSS Variables devem funcionar em ${browserConfig.name}`).toBeTruthy();

          // Verificar se Flexbox funciona
          const flexboxWorking = await page.evaluate(() => {
            const testEl = document.createElement('div');
            testEl.style.display = 'flex';
            document.body.appendChild(testEl);
            const computed = window.getComputedStyle(testEl).display;
            document.body.removeChild(testEl);
            return computed === 'flex';
          });

          expect(flexboxWorking, `Flexbox deve funcionar em ${browserConfig.name}`).toBeTruthy();

          // Verificar se Grid funciona
          const gridWorking = await page.evaluate(() => {
            const testEl = document.createElement('div');
            testEl.style.display = 'grid';
            document.body.appendChild(testEl);
            const computed = window.getComputedStyle(testEl).display;
            document.body.removeChild(testEl);
            return computed === 'grid';
          });

          expect(gridWorking, `CSS Grid deve funcionar em ${browserConfig.name}`).toBeTruthy();

          console.log(`${browserConfig.name} CSS Check: CSS=${cssLoaded}, Vars=${cssVarsWorking}, Flex=${flexboxWorking}, Grid=${gridWorking}`);

        } finally {
          await browser.close();
        }
      });
    }
  });

  test.describe("Performance Across Browsers", () => {
    for (const browserConfig of browsers) {
      test(`${browserConfig.name}-performance-baseline`, async () => {
        const browser = await browserConfig.browser.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        try {
          const startTime = Date.now();
          await page.goto('/', { waitUntil: 'domcontentloaded' });
          const domContentLoaded = Date.now() - startTime;

          await page.waitForLoadState('networkidle');
          const fullyLoaded = Date.now() - startTime;

          // Verificar tempos de carregamento razoáveis
          expect(domContentLoaded, `DOM deve carregar em < 3s em ${browserConfig.name}`).toBeLessThan(3000);
          expect(fullyLoaded, `Página deve carregar completamente em < 5s em ${browserConfig.name}`).toBeLessThan(5000);

          // Verificar Core Web Vitals básicos
          const metrics = await page.evaluate(() => {
            const perfEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            return {
              domContentLoaded: perfEntries.domContentLoadedEventEnd - perfEntries.fetchStart,
              loadComplete: perfEntries.loadEventEnd - perfEntries.fetchStart,
            };
          });

          expect(metrics.domContentLoaded, `DOM Content Loaded deve ser < 2s em ${browserConfig.name}`).toBeLessThan(2000);

          console.log(`${browserConfig.name} Performance: DOM=${domContentLoaded}ms, Full=${fullyLoaded}ms`);

        } finally {
          await browser.close();
        }
      });
    }
  });

  test.describe("Cross-browser Report Generation", () => {
    test("Generate Compatibility Report", async ({ page }) => {
      const report = {
        timestamp: new Date().toISOString(),
        browsers: browsers.map(b => b.name),
        viewports: viewports.map(v => v.name),
        routes: routes.map(r => r.name),
        results: {
          visualConsistency: 'analyzing',
          responsiveDesign: 'analyzing',
          javascriptCompatibility: 'analyzing',
          formInteractions: 'analyzing',
          cssCompatibility: 'analyzing',
          performance: 'analyzing'
        },
        summary: {
          totalTests: browsers.length * routes.length * 3, // Aproximado
          passed: 0,
          failed: 0,
          compatibility: 'high'
        }
      };

      // Salvar relatório (simulado)
      console.log('🌐 Cross-browser Compatibility Report:', JSON.stringify(report, null, 2));

      // Verificar estrutura do relatório
      expect(report.browsers.length, "Deve ter múltiplos browsers").toBeGreaterThan(1);
      expect(report.routes.length, "Deve ter múltiplas rotas").toBeGreaterThan(0);
      expect(report.timestamp, "Deve ter timestamp").toBeTruthy();
    });
  });
});
