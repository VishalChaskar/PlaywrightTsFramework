import {test,expect} from "@playwright/test";
test.describe("DemoQA Verify BookStore Application",()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://demoqa.com/",{waitUntil: 'domcontentloaded'});
        await expect(page).toHaveURL(/.*demoqa.*/);
    })
    test("Verify Search Book ", async ({page}) => {
        const bookStoreLink = page.getByRole('heading', { name: 'Book Store Application', level: 5 });
        await expect(bookStoreLink).toBeVisible();
        await bookStoreLink.click();
        await expect(page).toHaveURL(/.*books.*/);
        const searchInput = page.getByRole('textbox',{name:'Type to search'});
        await expect(searchInput).toBeVisible();
        await searchInput.fill('Speaking JavaScript');
        await searchInput.press('Enter');
        //verify that book is visible under title column but there are many other books present so want to filter out the book with the help of title column
        await expect(page.locator(`//table/tbody/tr`).filter({has: page.getByRole('link', {name:'Speaking JavaScript'})})).toBeVisible();
    })
});