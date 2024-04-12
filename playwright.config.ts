import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html'], ["allure-playwright", ]],
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://gotvantage.com',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Vantage-e2e-tests-chrome',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});
