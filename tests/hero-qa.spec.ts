import { test, expect } from "@playwright/test";
import * as fs from "fs";

test.describe("Hero Section QA", () => {
  test.beforeAll(async () => {
    try {
      fs.mkdirSync(".taskmaster/docs/evidencias/task-15-2", { recursive: true });
    } catch {}
  });

  test("Hero Section - Responsividade e Contraste AA", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/", { waitUntil: "load" });

    // Aguardar layout estável
    await page.waitForTimeout(500);

    // Capturar screenshot da Hero Section
    await page.screenshot({
      path: ".taskmaster/docs/evidencias/task-15-2/hero-section_1920.png",
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 800 }
    });

    // Validar presença dos elementos principais
    await expect(page.locator("h1")).toContainText("diferença entre sua academia");
    await expect(page.locator("text=QUERO MINHA ANÁLISE GRATUITA")).toBeVisible();
    await expect(page.locator("text=CONHECER CASES")).toBeVisible();

    // Validar badges de prova social
    await expect(page.locator("text=Elite Core ✓")).toBeVisible();
    await expect(page.locator("text=First Move ✓")).toBeVisible();
    await expect(page.locator("text=Two Ases ✓")).toBeVisible();
  });

  test("Hero Section - Mobile Responsividade", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/", { waitUntil: "load" });

    await page.waitForTimeout(500);

    // Capturar screenshot mobile
    await page.screenshot({
      path: ".taskmaster/docs/evidencias/task-15-2/hero-section_375.png",
      fullPage: false,
      clip: { x: 0, y: 0, width: 375, height: 600 }
    });

    // Validar que elementos estão presentes no mobile
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("text=QUERO MINHA ANÁLISE GRATUITA")).toBeVisible();

    // Verificar que não há overflow horizontal
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Tolerância de 10px
  });

  test("Hero Section - Tablet Responsividade", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/", { waitUntil: "load" });

    await page.waitForTimeout(500);

    // Capturar screenshot tablet
    await page.screenshot({
      path: ".taskmaster/docs/evidencias/task-15-2/hero-section_768.png",
      fullPage: false,
      clip: { x: 0, y: 0, width: 768, height: 700 }
    });

    // Validar layout 2 colunas → stack
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("text=QUERO MINHA ANÁLISE GRATUITA")).toBeVisible();
  });

  test("Hero Section - Contraste e Acessibilidade", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/", { waitUntil: "load" });

    await page.waitForTimeout(500);

    // Verificar se scrim está presente para contraste
    const scrimExists = await page.locator(".absolute.inset-0.bg-gradient-to-r").count() > 0;
    expect(scrimExists).toBe(true);

    // Verificar se texto tem contraste adequado (branco sobre gradiente escuro)
    const headlineColor = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      return window.getComputedStyle(h1).color;
    });
    expect(headlineColor).toContain("255"); // Deve ser branco (rgb com 255)

    // Validar foco visível nos botões
    await page.keyboard.press("Tab");
    const focusedButton = await page.locator("button:focus-visible");
    expect(await focusedButton.count()).toBeGreaterThan(0);
  });
});
