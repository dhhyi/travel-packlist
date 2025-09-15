import { expect, test } from '@playwright/test';

import { start, startWithRules } from './pages';

test('edit rules raw', async ({ page }) => {
  const rulesRaw = await startWithRules(page, '')
    .then((p) => p.toConfigPage())
    .then((p) => p.toRulesRawPage());

  await expect(rulesRaw.rawRules()).toBeVisible();

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 0 rules successfully!',
  );

  await rulesRaw.rawRules().fill(`NOT rainy :- Will it be sunny? $sunny;
NOT sunny :- Will it be rainy? $rainy;
`);

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 2 rules successfully!',
  );

  await rulesRaw
    .rawRules()
    .pressSequentially('rainy OR sunny :- [tool] umbrella;');

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 3 rules successfully!',
  );

  const packlist = await rulesRaw.toPacklistPage();

  await packlist.question('Will it be sunny?', false).click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation
    - checkbox "Will it be sunny?" [checked]
    - checkbox "Will it be rainy?"
    - button "Lock answers"
    - progressbar "You have packed 0 out of 1 items."
    - list "tool":
      - listitem:
        - checkbox "umbrella"
  `);
});

test('edit rules raw with error', async ({ page }) => {
  const rulesRaw = await startWithRules(page, '')
    .then((p) => p.toConfigPage())
    .then((p) => p.toRulesRawPage());

  await expect(rulesRaw.rawRules()).toBeVisible();

  await rulesRaw.rawRules().fill('NOT sunny :- Will it be sunny? $sunny;');

  await expect(rulesRaw.parserState()).toHaveText(
    'Parsed 1 rule successfully!',
  );

  await rulesRaw.rawRules().fill('error');

  await expect(rulesRaw.parserState()).toContainText(
    'Error parsing rules at line 1 column 1',
  );

  await expect(rulesRaw.parserState()).toHaveScreenshot();
});

test('edit rules raw with warnings', async ({ page }) => {
  const rulesRaw = await startWithRules(page, 'a :- B? $b; :- B? $b;')
    .then((p) => p.toConfigPage())
    .then((p) => p.toRulesRawPage());

  await expect(rulesRaw.rawRules()).toBeVisible();

  await expect(rulesRaw.parserState()).toContainText(
    'Variable b is declared more than once.',
  );
  await expect(rulesRaw.parserState()).toContainText(
    'Variable a is not declared in any question.',
  );
  await expect(rulesRaw.parserState()).toContainText(
    'Variable b is not used in any condition.',
  );

  await expect(rulesRaw.parserState()).toHaveScreenshot();
});

test('visit rules documentation', async ({ page }) => {
  await start(page)
    .then((p) => p.toConfigPage())
    .then((p) => p.toRulesRawPage())
    .then((p) => p.toRulesDocumentationPage());

  await expect(page).toHaveScreenshot();
});
