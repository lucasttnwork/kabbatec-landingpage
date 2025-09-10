import { test, expect } from "@playwright/test";

test.describe("Cases Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll to Cases section
    await page.evaluate(() => {
      // Look for the Cases section by finding h2 with specific text
      const headings = Array.from(document.querySelectorAll('h2'));
      const casesHeading = headings.find(h => h.textContent?.includes('Cases de Sucesso'));
      if (casesHeading) {
        casesHeading.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await page.waitForTimeout(500);
  });

  test("Cases Section - Layout and Content", async ({ page }) => {
    // Verificar se a seção existe
    await expect(page.locator('h2').filter({ hasText: 'Cases de Sucesso' })).toBeVisible();

    // Verificar subtítulo
    await expect(page.locator('text=Projetos executados com excelência')).toBeVisible();

    // Verificar conteúdo dos cases com seletores mais específicos
    await expect(page.locator('h3').filter({ hasText: 'Elite Core Academy' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'First Move Studio' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'Two Ases Fitness' })).toBeVisible();
  });

  test("Cases Section - Responsividade Desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Encontrar especificamente o grid da Cases Section
    const casesSection = page.locator('section').filter({ hasText: 'Cases de Sucesso' });
    const casesGrid = casesSection.locator('.grid').first();
    await expect(casesGrid).toHaveClass(/lg:grid-cols-3/);

    // Verificar que todos os cases são visíveis
    await expect(page.locator('h3').filter({ hasText: 'Elite Core Academy' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'First Move Studio' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'Two Ases Fitness' })).toBeVisible();
  });

  test("Cases Section - Responsividade Tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    // Encontrar especificamente o grid da Cases Section
    const casesSection = page.locator('section').filter({ hasText: 'Cases de Sucesso' });
    const casesGrid = casesSection.locator('.grid').first();
    await expect(casesGrid).toHaveClass(/md:grid-cols-2/);

    // Verificar que todos os cases ainda são visíveis
    await expect(page.locator('h3').filter({ hasText: 'Elite Core Academy' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'First Move Studio' })).toBeVisible();
  });

  test("Cases Section - Responsividade Mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    // Encontrar especificamente o grid da Cases Section
    const casesSection = page.locator('section').filter({ hasText: 'Cases de Sucesso' });
    const casesGrid = casesSection.locator('.grid').first();
    await expect(casesGrid).toHaveClass(/grid-cols-1/);

    // Verificar que todos os cases são visíveis
    await expect(page.locator('h3').filter({ hasText: 'Elite Core Academy' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'First Move Studio' })).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'Two Ases Fitness' })).toBeVisible();
  });

  test("Cases Section - Scroll Reveal Animation", async ({ page }) => {
    // Verificar se os elementos têm as classes de animação
    const caseCards = page.locator('.group');
    const firstCard = caseCards.first();

    // Verificar se tem as classes de transição (duration-300 na implementação atual)
    await expect(firstCard).toHaveClass(/transition-all/);
    await expect(firstCard).toHaveClass(/duration-300/);
  });

  test("Cases Section - Hover Effects", async ({ page }) => {
    const firstCard = page.locator('.group').first();

    // Verificar classes de hover (shadow-lg na implementação atual)
    await expect(firstCard).toHaveClass(/hover:shadow-lg/);
    await expect(firstCard).toHaveClass(/transform-gpu/);
  });

  test("Cases Section - Statistics Display", async ({ page }) => {
    // Verificar estatísticas
    await expect(page.locator('text=Projetos Concluídos')).toBeVisible();
    await expect(page.locator('text=Área Média')).toBeVisible();
    await expect(page.locator('text=Dias Médios')).toBeVisible();
    await expect(page.locator('text=Satisfação')).toBeVisible();

    // Verificar valores calculados com seletores mais específicos
    await expect(page.locator('.text-3xl').filter({ hasText: '3' })).toBeVisible(); // 3 projetos concluídos
    await expect(page.locator('.text-3xl').filter({ hasText: '100%' })).toBeVisible(); // 100% satisfação
  });

  test("Cases Section - Accessibility", async ({ page }) => {
    // Verificar atributos de acessibilidade
    const caseCards = page.locator('[role="button"]');
    const firstCard = caseCards.first();

    // Verificar se tem aria-label
    await expect(firstCard).toHaveAttribute('aria-label', /Ver detalhes/);

    // Verificar se tem tabindex
    await expect(firstCard).toHaveAttribute('tabindex', '0');
  });
});
