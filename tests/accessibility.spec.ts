import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("♿ Axe-core Accessibility Audit - SPRINT 3.2", () => {
  const routes = [
    { path: "/", name: "home" },
    { path: "/design-system", name: "design-system" },
    { path: "/hero-preview", name: "hero-preview" },
  ];

  test.describe("WCAG 2.1 AA Compliance", () => {
    for (const { path, name } of routes) {
      test(`${name}-accessibility-audit`, async ({ page }) => {
        await page.goto(path);

        // Executar auditoria completa do axe-core
        const accessibilityScanResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        // Verificar se não há violações críticas
        const criticalViolations = accessibilityScanResults.violations.filter(
          violation => violation.impact === 'critical' || violation.impact === 'serious'
        );

        if (criticalViolations.length > 0) {
          console.log('Critical/Serious Violations:', criticalViolations);
        }

        expect(criticalViolations.length, `Não deve haver violações críticas ou sérias em ${name}`).toBe(0);

        // Verificar se há poucas violações menores
        const minorViolations = accessibilityScanResults.violations.filter(
          violation => violation.impact === 'minor' || violation.impact === 'moderate'
        );

        if (minorViolations.length > 5) {
          console.log('Minor/Moderate Violations:', minorViolations);
        }

        // Permitir até 5 violações menores por página
        expect(minorViolations.length, `Poucas violações menores permitidas em ${name}`).toBeLessThanOrEqual(5);

        // Verificar score de acessibilidade
        const accessibilityScore = Math.round(
          (accessibilityScanResults.passes.length /
           (accessibilityScanResults.passes.length + accessibilityScanResults.violations.length)) * 100
        );

        expect(accessibilityScore, `Score de acessibilidade deve ser ≥ 95 em ${name}`).toBeGreaterThanOrEqual(95);
      });
    }
  });

  test.describe("Specific Accessibility Checks", () => {
    test("Color Contrast - WCAG AA", async ({ page }) => {
      await page.goto("/");

      // Verificar contraste de cores usando axe-core específico
      const contrastResults = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      const contrastViolations = contrastResults.violations.filter(
        v => v.id === 'color-contrast'
      );

      expect(contrastViolations.length, "Não deve haver problemas de contraste").toBe(0);
    });

    test("Keyboard Navigation", async ({ page }) => {
      await page.goto("/");

      // Verificar navegação por teclado
      const keyboardResults = await new AxeBuilder({ page })
        .withRules(['keyboard', 'focus-order-semantics'])
        .analyze();

      const keyboardViolations = keyboardResults.violations.filter(
        v => ['keyboard', 'focus-order-semantics'].includes(v.id)
      );

      expect(keyboardViolations.length, "Navegação por teclado deve funcionar").toBe(0);
    });

    test("Screen Reader Compatibility", async ({ page }) => {
      await page.goto("/");

      // Verificar compatibilidade com leitores de tela
      const screenReaderResults = await new AxeBuilder({ page })
        .withRules(['aria-required-attr', 'aria-required-children', 'aria-required-parent'])
        .analyze();

      const screenReaderViolations = screenReaderResults.violations.filter(
        v => ['aria-required-attr', 'aria-required-children', 'aria-required-parent'].includes(v.id)
      );

      expect(screenReaderViolations.length, "Deve ser compatível com leitores de tela").toBe(0);
    });

    test("Form Accessibility", async ({ page }) => {
      await page.goto("/");

      // Verificar acessibilidade de formulários
      const formResults = await new AxeBuilder({ page })
        .withRules(['label', 'form-field-multiple-labels', 'input-button-name'])
        .analyze();

      const formViolations = formResults.violations.filter(
        v => ['label', 'form-field-multiple-labels', 'input-button-name'].includes(v.id)
      );

      expect(formViolations.length, "Formulários devem ser acessíveis").toBe(0);
    });
  });

  test.describe("Interactive Elements Accessibility", () => {
    test("Buttons and Links", async ({ page }) => {
      await page.goto("/");

      // Verificar botões e links
      const buttonResults = await new AxeBuilder({ page })
        .withRules(['button-name', 'link-name'])
        .analyze();

      const buttonViolations = buttonResults.violations.filter(
        v => ['button-name', 'link-name'].includes(v.id)
      );

      expect(buttonViolations.length, "Botões e links devem ter nomes acessíveis").toBe(0);

      // Verificar foco visível
      const focusResults = await new AxeBuilder({ page })
        .withRules(['focus-visible'])
        .analyze();

      const focusViolations = focusResults.violations.filter(
        v => v.id === 'focus-visible'
      );

      expect(focusViolations.length, "Elementos devem ter foco visível").toBe(0);
    });

    test("Images and Media", async ({ page }) => {
      await page.goto("/");

      // Verificar imagens
      const imageResults = await new AxeBuilder({ page })
        .withRules(['image-alt', 'image-redundant-alt'])
        .analyze();

      const imageViolations = imageResults.violations.filter(
        v => ['image-alt', 'image-redundant-alt'].includes(v.id)
      );

      expect(imageViolations.length, "Imagens devem ter alt text apropriado").toBe(0);
    });
  });

  test.describe("Mobile Accessibility", () => {
    test("Touch Targets", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
      await page.goto("/");

      // Verificar tamanho de áreas de toque
      const touchResults = await new AxeBuilder({ page })
        .withRules(['target-size'])
        .analyze();

      const touchViolations = touchResults.violations.filter(
        v => v.id === 'target-size'
      );

      expect(touchViolations.length, "Áreas de toque devem ter tamanho adequado").toBe(0);
    });

    test("Zoom and Scaling", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto("/");

      // Verificar se página permite zoom
      const zoomResults = await new AxeBuilder({ page })
        .withRules(['meta-viewport'])
        .analyze();

      const zoomViolations = zoomResults.violations.filter(
        v => v.id === 'meta-viewport'
      );

      expect(zoomViolations.length, "Página deve permitir zoom").toBe(0);

      // Verificar viewport meta tag
      const viewport = await page.getAttribute('meta[name="viewport"]', 'content');
      expect(viewport, "Deve ter viewport meta tag").toBeTruthy();
      expect(viewport, "Viewport deve permitir zoom").toMatch(/user-scalable=yes|maximum-scale=[\d.]+/);
    });
  });

  test.describe("Content and Structure", () => {
    test("Heading Structure", async ({ page }) => {
      await page.goto("/");

      // Verificar estrutura de headings
      const headingResults = await new AxeBuilder({ page })
        .withRules(['heading-order', 'empty-heading'])
        .analyze();

      const headingViolations = headingResults.violations.filter(
        v => ['heading-order', 'empty-heading'].includes(v.id)
      );

      expect(headingViolations.length, "Headings devem ter estrutura correta").toBe(0);
    });

    test("Language and Text", async ({ page }) => {
      await page.goto("/");

      // Verificar idioma e texto
      const langResults = await new AxeBuilder({ page })
        .withRules(['html-lang-valid', 'valid-lang'])
        .analyze();

      const langViolations = langResults.violations.filter(
        v => ['html-lang-valid', 'valid-lang'].includes(v.id)
      );

      expect(langViolations.length, "Idioma deve ser especificado corretamente").toBe(0);
    });
  });

  test.describe("Accessibility Report Generation", () => {
    test("Generate Accessibility Report", async ({ page }) => {
      await page.goto("/");

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

      // Gerar relatório detalhado
      const report = {
        timestamp: new Date().toISOString(),
        url: page.url(),
        score: Math.round(
          (results.passes.length / (results.passes.length + results.violations.length)) * 100
        ),
        summary: {
          passed: results.passes.length,
          failed: results.violations.length,
          inapplicable: results.inapplicable.length,
          incomplete: results.incomplete.length
        },
        violations: results.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          help: v.help,
          helpUrl: v.helpUrl,
          nodes: v.nodes.length
        })),
        passes: results.passes.slice(0, 10).map(p => ({
          id: p.id,
          description: p.description,
          impact: p.impact
        }))
      };

      // Salvar relatório em arquivo (simulado)
      console.log('Accessibility Report:', JSON.stringify(report, null, 2));

      // Verificar se relatório foi gerado com sucesso
      expect(report.score, "Score deve ser calculado").toBeGreaterThanOrEqual(0);
      expect(report.summary.passed, "Deve ter alguns testes passando").toBeGreaterThan(0);
    });
  });
});
