import { test, expect } from '@playwright/test';

const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  mobileLarge: { width: 414, height: 736 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
};

test.describe('Responsive Visual Tests', () => {
  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    test(`Homepage looks correct on ${name} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:4321/');
      await page.waitForLoadState('networkidle');
      
      const screenshot = await page.screenshot({ fullPage: true });
      expect(screenshot).toMatchSnapshot({
        name: `homepage-${name}.png`,
        threshold: 0.15,
        maxDiffPixelRatio: 0.15,
      });
    });
  }

  test('Mobile menu works correctly', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('http://localhost:4321/');
    await page.waitForLoadState('networkidle');

    const menuToggle = page.locator('#menu-toggle');
    await expect(menuToggle).toBeVisible();
    
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/hidden/);
    
    await menuToggle.click();
    await expect(mobileMenu).toHaveClass(/flex/);
    
    const closeBtn = page.locator('#menu-close');
    await closeBtn.click();
    await expect(mobileMenu).toHaveClass(/hidden/);
  });

  test('No horizontal overflow on any viewport', async ({ page }) => {
    for (const [, viewport] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:4321/');
      await page.waitForLoadState('networkidle');

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    }
  });
});
