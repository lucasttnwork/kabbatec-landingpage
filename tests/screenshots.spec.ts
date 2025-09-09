import { test, expect } from "@playwright/test";

const routes = [
  { path: "/design-system", name: "design-system" },
  { path: "/grid-preview", name: "grid-preview" },
];

const viewports = [
  { width: 1920, height: 1080, name: "1920" },
  { width: 1440, height: 900, name: "1440" },
  { width: 768, height: 1024, name: "768" },
  { width: 375, height: 812, name: "375" },
];

test.describe("Screenshots", () => {
  for (const { path, name } of routes) {
    for (const vp of viewports) {
      test(`${name}-${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(path, { waitUntil: "load" });
        await expect(page).toHaveURL(new RegExp(`${path.replace("/", "\\/")}$`));
        // Aguarda layout estável
        await page.waitForTimeout(300);
        await page.screenshot({
          path: `../.taskmaster/docs/evidencias/task-2/${name}_${vp.name}.png`,
          fullPage: true,
        });
      });
    }
  }
});


