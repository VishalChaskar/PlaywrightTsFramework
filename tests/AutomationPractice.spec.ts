import {test, expect} from '@playwright/test';

test.describe('Automation Practice - Radio Button Example',() => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/',{waitUntil: 'domcontentloaded'});
    //await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/.*AutomationPractice.*/);
  });
  test('radio section is visible and has three radios', async ({page}) => {
    await expect(page.getByText('Radio Button Example',{ exact:true })).toBeVisible();
    await expect(page.locator('[name="radioButton"]')).toHaveCount(3);
  });
  test('all radio labels are visible', async ({page}) => {
    const labels = ['radio1','radio2','radio3'];
    for (const label of labels){
      await expect(page.locator(`//*[@for="${label}"]`)).toBeVisible();
    }
    
   });
   test('Select Radio2 marks it checked', async ({page}) => {
      const radio2 = page.locator(`input[value="radio2"]`);
      await radio2.check();
      await expect(radio2).toBeChecked();
   })
});

test.describe('Suggession Class Example', () => {
  test('suggestion input is visible and accepts input', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/',{waitUntil: 'domcontentloaded'});
    await expect(page.getByText('Suggession Class Example',{ exact:true })).toBeVisible();
    const input = page.locator('#autocomplete');
    await input.fill('Ind');
    const options = page.locator('.ui-menu-item div');
    await expect(options.first()).toBeVisible();
    await page.getByText('India',{exact:true}).click();
    await expect(input).toHaveValue('India');
    
  })
})