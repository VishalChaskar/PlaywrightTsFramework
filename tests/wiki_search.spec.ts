import { test, expect } from '@playwright/test';

test.describe('Wikipedia Search Functionality', () => {

  test('Search for an article', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    await page.fill('#searchInput','Playwright');
    await page.press('#searchInput','Enter')

    //validate navigation to article page
    const heading = page.locator('.mw-page-title-main').nth(0);
    await expect(heading).toHaveText('Playwright');

  });

});