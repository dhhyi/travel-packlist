import { expect, test } from '@playwright/test';

import { start } from './pages';

test('remote rules', async ({ page }) => {
  await page.route('**/mocked-rules.txt', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'text/plain',
      body: ':- [Test] Test item',
    });
  });

  const config = await start(page).then((page) => page.toConfigPage());

  await config.rulesMode.remote().click();

  await expect(config.remoteRulesURL()).toBeVisible();
  await expect(config.remoteSourceStatus()).toHaveText('idle');

  await config.remoteRulesURL().fill('http://localhost:4200/mocked-rules.txt');
  await config.remoteRulesURL().blur();

  await config.remoteSourceStatus().scrollIntoViewIfNeeded();

  await expect(config.remoteSourceStatus()).toHaveText('loaded');

  await expect(page).toHaveScreenshot();

  const packlist = await config.toPacklistPage();

  await expect(packlist.item('Test item', false)).toBeVisible();
});
