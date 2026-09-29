import { test, expect } from '@playwright/test';

test('practice locators on Parabank login page', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');

  const usernameInput = page.locator('#username');
  const passwordInput = page.locator('#password');
  const loginButton = page.locator('input[type="submit"]');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginButton).toBeVisible();
});