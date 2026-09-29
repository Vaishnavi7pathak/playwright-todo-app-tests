import { test, expect } from '@playwright/test';

test('test to do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Cleaning');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Cooking');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Reading book');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
});