import { test } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigation-page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');
});

test('Navigate to form layouts page', async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutPage();

    // Example assertions (replace selectors with actual ones from your app)
    await page.waitForSelector('h1:has-text("Form Layouts")');
});
