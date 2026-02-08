import {test,expect} from "@playwright/test";

test.describe("Amazon page testing",()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://www.amazon.ie/",{waitUntil: 'domcontentloaded'});
        await expect(page).toHaveURL(/.*amazon.*/);
    });
    test("Search for a product and verify results", async ({page}) => {
        const searchInput = page.getByRole('searchbox', { name: 'Search Amazon.ie' });
        await expect(searchInput).toBeVisible();
        await searchInput.fill('Apple Iphone 16');
        await page.getByRole('button', { name: 'Go',exact:true }).click();
        const results = page.locator('[data-cy="asin-faceout-container"]');
        await expect(results.first()).toBeVisible();
        const count = await results.count();
        expect(count).toBeGreaterThan(0);
    })
    test("Verify Todays deal", async ({page}) => {
        const todayDealLink = page.getByRole('link', { name: "Today's Deals" });
        await expect(todayDealLink).toBeVisible();
        await todayDealLink.click();
        const dealResults = page.locator('[data-cy="asin-faceout-container"]');
        await expect(dealResults.first()).toBeVisible();
        const count = await dealResults.count();
        expect(count).toBeGreaterThan(0);   
    })
})