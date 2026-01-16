import { test, expect} from '@playwright/test';

test.beforeEach(async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

});

test.describe("Home Page" , () => {
    test("should have correct metadata and elements", async ({page}) =>{
        //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect(page).toHaveTitle("Practice Page");
        expect(page.getByRole("heading", { name: "Practice Page" })).toBeVisible();
        await expect(page.getByRole("link", {name:"Free Access to InterviewQues/ResumeAssistance/Material"})).toBeVisible();

    })

    test("should redirect to document request page" , async ({page}) =>{

        //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect(page.getByRole("link", {name:"Free Access to InterviewQues/ResumeAssistance/Material"})).toBeVisible();
        await page.getByRole("link", {name:"Free Access to InterviewQues/ResumeAssistance/Material"}).click();
        await expect(page).toHaveTitle("RS Academy");
    })

}); 