import { expect, test } from '@playwright/test';

test('has title on get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
  await expect(page).toHaveTitle(/Installation/);
});
