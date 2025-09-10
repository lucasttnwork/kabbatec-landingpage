import { test, expect } from "@playwright/test";

const routes = [
  { path: "/design-system", name: "design-system" },
  { path: "/grid-preview", name: "grid-preview" },
  { path: "/hero-preview", name: "hero-preview" },
  { path: "/problem-preview", name: "problem-preview" },
  { path: "/solution-preview", name: "solution-preview" },
  { path: "/methodology-preview", name: "methodology-preview" },
  { path: "/", name: "home" },
];

const viewports = [
  { width: 1920, height: 1080, name: "1920" },
  { width: 1440, height: 900, name: "1440" },
  { width: 768, height: 1024, name: "768" },
  { width: 375, height: 812, name: "375" },
];

test.describe("QA - Overflow e Tokens", () => {
  for (const { path, name } of routes) {
    for (const vp of viewports) {
      test(`${name}-overflow-${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(path);

        // Verifica ausência de overflow horizontal
        const hasNoOverflow = await page.evaluate(() => {
          return (
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth
          );
        });
        await expect(hasNoOverflow, "Sem overflow horizontal").toBeTruthy();
      });
    }
  }

  test("Design tokens presentes em /design-system", async ({ page }) => {
    await page.goto("/design-system");
    // Verifica existência de amostras de cor que usam tokens
    const primary = await page.locator("text=Primary").count();
    const accent = await page.locator("text=Accent").count();
    await expect(primary).toBeGreaterThan(0);
    await expect(accent).toBeGreaterThan(0);
  });
});


