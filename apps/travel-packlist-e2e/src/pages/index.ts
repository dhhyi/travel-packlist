import { expect, type Page } from '@playwright/test';

import { PacklistPage } from './packlist-page';

export async function start(page: Page) {
  await page.goto('/');
  expect(await page.getByRole('banner').textContent()).toContain(
    'TravelPacklist',
  );
  return new PacklistPage(page);
}

export async function startWithRules(page: Page, rules: string) {
  await page.goto('/');
  await page.evaluate((rules) => {
    localStorage.setItem('state', JSON.stringify({ rules }));
  }, rules);
  return start(page);
}
