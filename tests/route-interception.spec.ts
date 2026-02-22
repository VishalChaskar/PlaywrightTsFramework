import {test, expect} from '@playwright/test';

test.describe('Network test - route interception',() => {

    test('should intercept and mock api response' , async ({ page }) => {
    
                await page.goto('https://rahulshettyacademy.com/users');

const response = await page.waitForResponse('https://rahulshettyacademy.com/users');

// Print status
console.log("STATUS:", response.status());

// Print URL
console.log("URL:", response.url());

// Print raw body
console.log("BODY TEXT:", await response.text());

// If JSON:
try {
  console.log("BODY JSON:", await response.json());
} catch (e) {
  console.log("Not JSON");
}

            });
        });