import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

/**
 * https://github.com/dhhyi/travel-packlist/issues/13
 */
test('bug #13', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    `
:-
   Will it be raining? $rainy,
   Will it be sunny? $sunny;
`,
  );

  await packlist.lockAnswersButton().click();

  await expect(packlist.lockAnswersButton()).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await packlist
    .toConfigPage()
    .then((configPage) => configPage.toPacklistPage());

  await expect(packlist.lockAnswersButton()).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});
