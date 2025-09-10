import { test, expect } from "@playwright/test";
import * as fs from "fs";

const routes = [
  { path: "/design-system", name: "design-system" },
  { path: "/grid-preview", name: "grid-preview" },
  { path: "/hero-preview", name: "hero-preview" },
  { path: "/problem-preview", name: "problem" },
  { path: "/solution-preview", name: "solution" },
  { path: "/methodology-preview", name: "methodology" },
  { path: "/", name: "home-problem" },
];

const viewports = [
  { width: 1920, height: 1080, name: "1920" },
  { width: 1440, height: 900, name: "1440" },
  { width: 768, height: 1024, name: "768" },
  { width: 375, height: 812, name: "375" },
];

test.describe("Screenshots", () => {
  test.beforeAll(async () => {
    try {
      fs.mkdirSync(".taskmaster/docs/evidencias/task-3", { recursive: true });
      fs.mkdirSync(".taskmaster/docs/evidencias/task-4", { recursive: true });
      fs.mkdirSync(".taskmaster/docs/evidencias/task-5", { recursive: true });
      fs.mkdirSync(".taskmaster/docs/evidencias/task-6", { recursive: true });
      fs.mkdirSync(".taskmaster/docs/evidencias/task-15-2", { recursive: true });
    } catch {}
  });
  for (const { path, name } of routes) {
    for (const vp of viewports) {
      test(`${name}-${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(path, { waitUntil: "load" });
        await expect(page).toHaveURL(new RegExp(`${path.replace("/", "\\/")}$`));
        // Aguarda layout estável
        await page.waitForTimeout(300);
        const isProblem = name === "problem" || name === "home-problem";
        const isSolution = name === "solution";
        const isMethodology = name === "methodology" || name === "home-methodology";
        const dir = isProblem
          ? ".taskmaster/docs/evidencias/task-4"
          : isSolution
          ? ".taskmaster/docs/evidencias/task-5"
          : isMethodology
          ? ".taskmaster/docs/evidencias/task-6"
          : ".taskmaster/docs/evidencias/task-3";
        await page.screenshot({ path: `${dir}/${name}_${vp.name}.png`, fullPage: true });
      });
    }
  }
});


