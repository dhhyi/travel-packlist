import { expect, Locator, type Page } from '@playwright/test';

import { PacklistPage } from './packlist-page';

export function init(page: Page) {
  const state: Record<string, unknown> = {
    animations: false,
  };

  const crossroads = {
    withRules,
    noAccessibilityMode,
    go,
  };

  async function go() {
    await page.addInitScript((s) => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.localStorage.setItem('state', JSON.stringify(s));
    }, state);
    await page.goto('/');
    expect(await page.getByRole('banner').textContent()).toContain(
      'TravelPacklist',
    );
    return new PacklistPage(page);
  }

  function withRules(rules: string) {
    state['rules'] = rules;
    state['rulesMode'] = 'local';
    return crossroads;
  }

  function noAccessibilityMode() {
    state['accessibility'] = 'compact';
    return crossroads;
  }

  return crossroads;
}

export async function enclosingComponent(locator: Locator) {
  const tagName = await locator.evaluate((el) => el.tagName.toLowerCase());
  if (tagName.startsWith('app-')) {
    return locator;
  } else {
    return enclosingComponent(locator.locator('..'));
  }
}
