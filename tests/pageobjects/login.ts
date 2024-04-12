import { Locator, Page, expect } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly forwardArrow: Locator
  readonly logIn: Locator;
  readonly chooseABrand: Locator
  readonly error: Locator

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('//input[@id="id_email"]');
    this.forwardArrow = page.locator('//*[@data-testid="ArrowForwardIosOutlinedIcon"]');
    this.password = page.locator('//input[@id="id_password"]');
    this.logIn = page.locator('//button[@data-testid="signin-submit"]');
    this.chooseABrand = page.locator('//h1')
    this.error = page.locator('//div[@data-testid="signin-errors"]')
  }

  async sigIn(email:string, password:string) {
    await this.email.type(email);
    await this.forwardArrow.click()
    await this.password.type(password);
    await this.logIn.click();
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL('**\/organizations');
    await expect(this.chooseABrand).toBeVisible();
  }

  async verifyInvalidLogin() {
    await expect(this.error).toBeVisible();
  }

}
