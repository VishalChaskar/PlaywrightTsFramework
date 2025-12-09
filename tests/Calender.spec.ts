// ...existing code...
import { test } from '@playwright/test';

console.log('Loaded tests/Calender.spec.ts');

test.only('calendar select', async ({ page }) => {
    const monthNumber = "1";
    const date = "15";
    const year = "2025";

    const expectedList = [monthNumber, date , year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator('div.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    await page.waitForTimeout(3000);
    // ...existing code...
});