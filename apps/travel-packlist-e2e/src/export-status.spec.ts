import { expect, test } from '@playwright/test';

import { start, startWithRules } from './pages';

test('export status - default rules', async ({ page }) => {
  const config = await start(page).then((page) => page.toConfigPage());

  await config.copyRulesLocallyButton().click();

  await expect(config.exportNeededAlert()).toBeHidden();

  const editor = await config.toEditorPage();

  await editor.toolbar.mode('delete').click();
  await editor.rule(1).deleteButton().click();
  await editor.dialog.confirm().click();

  await editor.toConfigPage();

  await expect(config.exportNeededAlert()).toBeVisible();
});

test('export status - changed rules', async ({ page }) => {
  const config = await startWithRules(page, ':-').then((page) =>
    page.toConfigPage(),
  );

  await expect(config.exportNeededAlert()).toBeVisible();

  await config.exportNeededAlert().scrollIntoViewIfNeeded();

  await expect(config.exportNeededAlert()).toHaveText(
    'Current rules are not backed up!',
  );
  await expect(page).toHaveScreenshot();

  await config.resetApplicationButton().click();

  await expect(config.dialog()).toBeVisible();

  await config.dialog.confirm().click();

  await expect(config.dialog()).toBeHidden();

  await expect(config.exportNeededAlert()).toBeHidden();
});
