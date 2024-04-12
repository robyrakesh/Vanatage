import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Login } from './pageobjects/login';
import { VantageHomePage } from './pageobjects/vanatge-home-page';

test.describe('login', function () {
    let login: Login
    let vantageHomePage: VantageHomePage
    test.beforeEach(async function ({ playwright, page }) {
        login = new Login(page)
        vantageHomePage = new VantageHomePage(page)
        await page.goto('/')
    });

    test('Successful Login', async function ({ page }) {
        await vantageHomePage.navigateToLogin()
        await login.sigIn("rakeshroby@yahoo.com", "Qwerty@123");
        await login.verifySuccessfulLogin()
    });

    test('Unsuccessful Login', async ({ page }) => {
        const email = faker.internet.email();
        const password = faker.internet.password();
        await vantageHomePage.navigateToLogin()
        await login.sigIn(email, password);
        await login.verifyInvalidLogin()
    });

})
