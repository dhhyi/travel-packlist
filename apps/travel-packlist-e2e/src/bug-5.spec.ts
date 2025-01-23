import { test, expect } from '@playwright/test';

import { start } from './pages';

/**
 * https://github.com/dhhyi/travel-packlist/issues/5
 */
test('bug #5', async ({ page }) => {
  const packlist = await start(page);

  await expect(packlist.lockAnswersButton()).toBeVisible();

  await packlist
    .toConfigPage()
    .then((configPage) => configPage.toRulesRawPage())
    .then((rulesRawPage) => rulesRawPage.toPacklistPage());

  await expect(packlist.lockAnswersButton()).toBeVisible();
});
