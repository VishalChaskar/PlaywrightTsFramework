import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}
    async goto(){
        await this.page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    }

    async getTitle(){
        return this.page.title();
    }

    async isHeaderVisible(){
        return this.page.isVisible('text=Practice Page');
    }
    async getAllLegendTexts(): Promise<string[]> {
    return this.page.locator('legend').allTextContents();
  }

}