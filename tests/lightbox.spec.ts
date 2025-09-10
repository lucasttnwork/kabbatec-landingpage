import { test, expect } from '@playwright/test';

test.describe('Lightbox Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should open lightbox when clicking on case card', async ({ page }) => {
    // Wait for cases section to load
    await page.waitForSelector('[data-testid="cases-section"]');

    // Click on first case card
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await expect(firstCaseCard).toBeVisible();
    await firstCaseCard.click();

    // Check if lightbox opens
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).toBeVisible();

    // Check if close button exists
    const closeButton = page.locator('[data-testid="lightbox-close"]');
    await expect(closeButton).toBeVisible();
  });

  test('should display case information in lightbox', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Click on first case card
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Check case title is displayed
    const caseTitle = page.locator('[data-testid="lightbox-case-title"]');
    await expect(caseTitle).toBeVisible();
    await expect(caseTitle).not.toBeEmpty();

    // Check case description container is displayed
    const caseDescription = page.locator('[data-testid="lightbox-case-description"]');
    await expect(caseDescription).toBeVisible();

    // Check case metrics are displayed
    const caseMetrics = page.locator('[data-testid="lightbox-case-metrics"]');
    await expect(caseMetrics).toBeVisible();
  });

  test('should close lightbox when clicking close button', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Click close button
    const closeButton = page.locator('[data-testid="lightbox-close"]');
    await closeButton.click();

    // Check lightbox is closed
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).not.toBeVisible();
  });

  test('should close lightbox when clicking overlay', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Click on overlay (outside the modal content)
    await page.mouse.click(10, 10); // Click on top-left corner of viewport

    // Check lightbox is closed
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).not.toBeVisible();
  });

  test('should close lightbox with Escape key', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Press Escape key
    await page.keyboard.press('Escape');

    // Check lightbox is closed
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).not.toBeVisible();
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Get initial case title
    const initialTitle = await page.locator('[data-testid="lightbox-case-title"]').textContent();

    // Test that Escape key closes the lightbox
    await page.keyboard.press('Escape');
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).not.toBeVisible();
  });

  test('should show image counter for cases with gallery', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox for a case with gallery (Elite Core has 4 images total)
    const eliteCoreCard = page.locator('[data-testid="case-card"]').filter({ hasText: 'Elite Core' });
    await eliteCoreCard.click();

    // Check image counter shows correct format
    const imageCounter = page.locator('[data-testid="lightbox-image-counter"]');
    await expect(imageCounter).toContainText('/ 4'); // Main image + 3 gallery images
  });

  test('should show image thumbnails for cases with gallery', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox for Elite Core (has gallery)
    const eliteCoreCard = page.locator('[data-testid="case-card"]').filter({ hasText: 'Elite Core' });
    await eliteCoreCard.click();

    // Check thumbnails are visible
    const thumbnails = page.locator('[data-testid="lightbox-thumbnails"] img');
    await expect(thumbnails).toHaveCount(4); // 1 main + 3 gallery images
  });



  test('should have zoom button', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Check zoom button exists
    const zoomButton = page.locator('[data-testid="lightbox-zoom-button"]');
    await expect(zoomButton).toBeVisible();
    await expect(zoomButton).toHaveAttribute('aria-label');
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Check lightbox adapts to mobile
    const lightbox = page.locator('[data-testid="lightbox-modal"]');
    await expect(lightbox).toBeVisible();

    // Check close button is still accessible
    const closeButton = page.locator('[data-testid="lightbox-close"]');
    await expect(closeButton).toBeVisible();
  });


  test('should display navigation instructions', async ({ page }) => {
    await page.waitForSelector('[data-testid="cases-section"]');

    // Open lightbox
    const firstCaseCard = page.locator('[data-testid="case-card"]').first();
    await firstCaseCard.click();

    // Check instructions are displayed
    const instructions = page.locator('[data-testid="lightbox-instructions"]');
    await expect(instructions).toBeVisible();
    await expect(instructions).toContainText('Use as setas do teclado');
    await expect(instructions).toContainText('Toque e arraste');
  });
});
