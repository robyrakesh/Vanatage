import { Locator, Page } from '@playwright/test';

export class VantageHomePage {
  readonly page: Page;
  readonly loginMenuItem: Locator;
  readonly contactUsMenuItem: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.loginMenuItem = page.locator('//ul/li[6]');
    this.contactUsMenuItem = page.getByRole('link', { name: 'Contact Us' })
  }

  async navigateToLogin() {
    await this.loginMenuItem.click()
  }

  async navigateToContactUs() {
    await this.contactUsMenuItem.click()
  }
}
