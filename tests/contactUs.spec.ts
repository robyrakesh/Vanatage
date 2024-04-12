import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { User } from './types/user';
import { ContactUsPage } from './pageobjects/contact-us-page';
import { VantageHomePage } from './pageobjects/vanatge-home-page';

test.describe('ContactUs', function () {
    let contactUs: ContactUsPage
    let vantageHomePage: VantageHomePage

    const user: User = {
        firstName: "Test",
        lastName: "User",
        email: "test@g.com"
    }
    test.beforeEach(async function ({ playwright, page }) {
        contactUs = new ContactUsPage(page)
        vantageHomePage = new VantageHomePage(page)
        await page.goto('/')
    });

    test('Successful Form Submission', async function ({ page }) {
        const fillMandaotryFields: boolean = true
        await vantageHomePage.navigateToContactUs()
        await contactUs.submitForm(fillMandaotryFields, user)
        await contactUs.verifySuccessfulFormSubmission()
    });

    test('Unsuccessful Form Submission', async ({ page }) => {
        const fillMandaotryFields: boolean = false
        await vantageHomePage.navigateToContactUs()
        await contactUs.submitForm(fillMandaotryFields, user)
        await contactUs.verifyInvalidFormSubmission()
    });

})
