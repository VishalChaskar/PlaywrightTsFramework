import { test, expect } from '@playwright/test';

test.describe('Wikipedia Navigation', () => {

  test('Navigate to Wikiversity from Wikipedia HomePage', async ({ page }) => {
    //navigate to wikipedia page
    await page.goto('https://www.wikipedia.org');
    
    //Scroll to footer if needed
    await page.locator('footer').scrollIntoViewIfNeeded();

    //locate wikiversity link in footer
    const wikiversityLink = page.getByRole('link',{ name: 'Wikiversity'});
    await expect(wikiversityLink).toBeVisible();

    //click wikiversity link
    await wikiversityLink.click();
  
    //validate post navigation url
    await expect(page).toHaveURL('https://www.wikiversity.org');


});

});