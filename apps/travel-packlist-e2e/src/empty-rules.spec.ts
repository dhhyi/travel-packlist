import { test, expect } from '@playwright/test';

import { startWithRules } from './pages';

test('empty rules', async ({ page }) => {
  await startWithRules(page, '');

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
  await startWithRules(page, ':-');

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
  await startWithRules(page, ':- Will it be sunny? $sunny');

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - checkbox "Will it be sunny?"
    - button "Lock answers"
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);
  await expect(page).toHaveScreenshot();
});
