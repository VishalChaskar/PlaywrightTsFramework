import { test, expect } from '@playwright/test';

test.describe('Wikipedia Landing Page', () => {

  test('Validate landing page elements', async ({ page }) => {

    await page.goto('https://www.wikipedia.org');
    //verify wikipedia page title
    await expect(page).toHaveTitle(/Wikipedia/);
    //verify wiki logo
    const logo = page.locator('.svg-Wikipedia_wordmark');
    await expect(logo).toBeVisible();

    //Validate search input
    const searchInput = page.getByRole('searchbox', { name: 'Search Wikipedia' });
    await expect(searchInput).toBeVisible
  });

});