import { test, expect } from '@playwright/test';

import { init } from './pages';

test('empty rules', async ({ page }) => {
  await init(page).withRules('').go();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - paragraph:
      - text: No rules available, please
      - button "import"
      - text: or
      - button "create"
      - text: some.
  `);
  await expect(page).toHaveScreenshot();
});

test('empty rule', async ({ page }) => {
  await init(page).withRules(':-').go();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - paragraph:
      - text: No questions available, please
      - button "create"
      - text: some.
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);
  await expect(page).toHaveScreenshot();
});

test('rule without items', async ({ page }) => {
  await init(page).withRules(':- Will it be sunny? $sunny').go();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - checkbox "Will it be sunny?"
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);
  await expect(page).toHaveScreenshot();
});
