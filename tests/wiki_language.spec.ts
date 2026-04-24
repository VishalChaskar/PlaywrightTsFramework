import { test, expect } from '@playwright/test';

test.describe('Wikipedia Language Selection', () => {

  test('Switch language to Spanish', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');

    // Click Spanish language link
    await page.getByText('Deutsch', { exact: true }).click();

    //validate deutch wikipedia loaded
    await expect(page).toHaveURL('/https://de.wikipedia.org/wiki/Wikipedia:Hauptseite/');
    
    //validate heading text is deutch
    const heading = page.locator('');
    await expect(heading).toContainText('Wikipedia');




  });

});