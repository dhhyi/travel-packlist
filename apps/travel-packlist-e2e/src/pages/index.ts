import { expect, Locator, type Page } from '@playwright/test';

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
    localStorage.setItem(
      'state',
      JSON.stringify({ rules, rulesMode: 'local' }),
    );
  }, rules);
  return start(page);
}

export async function enclosingComponent(locator: Locator) {
  const tagName = await locator.evaluate((el) => el.tagName.toLowerCase());
  if (tagName.startsWith('app-')) {
    return locator;
  } else {
    return enclosingComponent(locator.locator('..'));
  }
}
