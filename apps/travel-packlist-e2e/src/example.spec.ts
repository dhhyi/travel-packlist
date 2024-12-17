import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.getByRole('navigation').textContent()).toContain(
    'TravelPacklist',
  );
});
