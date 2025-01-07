import { test, expect } from '@playwright/test';

import { RulesRawPage } from './pages/rules-raw-page';

test('empty rules', async ({ page }) => {
  const rulesRaw = new RulesRawPage(page);
  await rulesRaw.navigate();

  await rulesRaw.rawRules().fill('');

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 0 rules successfully!',
  );

  await rulesRaw.banner().click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - paragraph:
      - text: No rules available, please
      - button "import"
      - text: or
      - button "create"
      - text: some.
  `);
});

test('empty rule', async ({ page }) => {
  const rulesRaw = new RulesRawPage(page);
  await rulesRaw.navigate();

  await rulesRaw.rawRules().fill(':-');

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 1 rules successfully!',
  );

  await rulesRaw.banner().click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - paragraph:
      - text: No questions available, please
      - button "create"
      - text: some.
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);
});

test('rule without items', async ({ page }) => {
  const rulesRaw = new RulesRawPage(page);
  await rulesRaw.navigate();

  await rulesRaw.rawRules().fill(':- Will it be sunny? $sunny');

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 1 rules successfully!',
  );

  await rulesRaw.banner().click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - checkbox "Will it be sunny?"
    - button "Lock answers"
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);
});
