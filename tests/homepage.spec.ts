import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/homepage';

test('Verify homepage loads correctly', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.goto();

    //verify title
    await expect(page).toHaveTitle('Practice Page');
    //verify header is displayed
    expect(await homepage.isHeaderVisible()).toBeTruthy();
});

test('Verify all legend text on homepage', async({page})=>{
    const homepage = new HomePage(page);
    await homepage.goto();
    const legends = await homepage.getAllLegendTexts();
    console.log('Legend texts on homepage', legends);
    expect(legends.length).toBeGreaterThan(0);
});