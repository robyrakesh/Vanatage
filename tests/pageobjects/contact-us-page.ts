import { Locator, Page, expect } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.email = page.getByPlaceholder('Email Address');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByLabel('Contact form').getByText('Thank you for your message.')
    this.errorMessage = page.getByLabel('Contact form').getByText('One or more fields have an')
  }

  async fillForm(fname: string, lname: string, email: string) {
    await this.firstName.fill(fname)
    await this.lastName.fill(lname)
    await this.email.fill(email)
  }

  async submitForm(mandatoryFields: boolean, {firstName, lastName, email}) {
    if (mandatoryFields)
    await this.fillForm(firstName, lastName, email)
    await this.submitButton.click()
  }

  async verifySuccessfulFormSubmission() {
    await expect(this.successMessage).toBeVisible()
  }

  async verifyInvalidFormSubmission() {
    await expect(this.errorMessage).toBeVisible();
  }
}
