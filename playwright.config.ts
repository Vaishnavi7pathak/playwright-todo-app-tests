import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './', // folder where your tests live
  timeout: 30 * 1000, // 30 seconds per test
  retries: 1, // retry failing tests once
  reporter: [
    ['list'], // console output
    ['html', { outputFolder: 'playwright-report' }], // HTML report
  ],
  use: {
    headless: false, // show browser
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    launchOptions:{
        slowMo : 300,
    }
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
