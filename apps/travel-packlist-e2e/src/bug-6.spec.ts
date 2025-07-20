import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

/**
 * https://github.com/dhhyi/travel-packlist/issues/6
 */
test('bug #6', async ({ page }) => {
  const editRaw = await startWithRules(page, '')
    .then((packlist) => packlist.toConfigPage())
    .then((configPage) => configPage.toRulesRawPage());

  await editRaw.rawRules().fill(':- Blubb;');

  await expect(editRaw.parserState()).toContainText('Error parsing rules');

  const editor = await editRaw
    .toConfigPage()
    .then((configPage) => configPage.toEditorPage());

  await expect(editor.error()).toBeVisible();

  await editor.error.goToRulesRaw();

  await editRaw.rawRules().clear();
  await editRaw.rawRules().fill(':- Blubb $Blubb;');

  await expect(editRaw.parserState()).toContainText(
    'Parsed 1 rule successfully!',
  );

  await page.goBack();

  await expect(editor.error()).toBeHidden();
  await expect(editor.toolbar()).toBeVisible();
});
