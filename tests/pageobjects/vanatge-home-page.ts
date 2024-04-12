import { Locator, Page } from '@playwright/test';

export class VantageHomePage {
  readonly page: Page;
  readonly loginMenuItem: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.loginMenuItem = page.locator('//ul/li[6]');
  }

  async navigateToLogin() {
    await this.loginMenuItem.click()
  }
}
