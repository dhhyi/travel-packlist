import { expect, test } from '@playwright/test';

import { start } from './pages';

test('remote rules with copy', async ({ page }) => {
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

  await config.remoteSourceStatus().scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "Rules Mode" [level=2]
    - radiogroup "Rules Mode":
      - radio "local"
      - radio "remote" [checked]
    - heading "Remote Source" [level=2]
    - textbox "remote rules source"
    - button "Load source from history" [disabled]
    - status "remote source status"
    - button "Reload source" [disabled]
    - button "Copy rules locally" [disabled]
    - heading "Rules Viewer" [level=2]
    - button "View Rules" [disabled]
    - checkbox "Fade out disabled rules"
    - checkbox "Highlight variable status"
    - button "View Rules Code" [disabled]
  `);

  await config.remoteRulesURL().fill('http://localhost:4200/mocked-rules.txt');
  await config.remoteRulesURL().blur();

  await expect(config.remoteSourceStatus()).toHaveText('loaded');

  await config.remoteSourceStatus().scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "Remote Source" [level=2]
    - textbox "remote rules source": "http://localhost:4200/mocked-rules.txt"
    - button "Load source from history" [disabled]
    - status "remote source status"
    - button "Reload source"
    - button "Copy rules locally"
    - heading "Rules Viewer" [level=2]
    - button "View Rules"
    - checkbox "Fade out disabled rules"
    - checkbox "Highlight variable status"
    - button "View Rules Code"
  `);

  const packlist = await config.toPacklistPage();

  await expect(packlist.item('Test item', false)).toBeVisible();

  await packlist.toConfigPage();
  await config.copyRulesLocallyButton().click();

  await expect(config.rulesMode.local()).toBeEnabled();

  const editor = await config.toEditorPage();

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF always
      - group "item":
        - combobox "category" [disabled]:
          - option "Test" [selected]
          - option "+"
        - textbox "item name" [disabled]: Test item
  `);
});

test('remote rules error', async ({ page }) => {
  await page.route('**/invalid-rules.txt', async (route) => {
    await route.fulfill({
      status: 404,
      contentType: 'text/plain',
      body: 'Not found',
    });
  });

  const config = await start(page).then((page) => page.toConfigPage());

  await config.rulesMode.remote().click();

  await expect(config.remoteRulesURL()).toBeVisible();
  await expect(config.remoteSourceStatus()).toHaveText('idle');

  await config.remoteRulesURL().fill('http://localhost:4200/invalid-rules.txt');

  await config.remoteRulesURL().blur();

  await expect(config.remoteSourceStatus()).toContainText('404');

  await config.remoteSourceStatus().scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();

  const packlist = await config.toPacklistPage();

  await expect(packlist.error()).toBeVisible();

  await expect(page).toHaveScreenshot();
});

test.describe(() => {
  test.describe.configure({ retries: 3 });

  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(!!process.env['CI'], 'Skip on CI');

  test('remote rules from Google Drive', async ({ page }) => {
    const config = await start(page).then((page) => page.toConfigPage());

    await config.rulesMode.remote().click();

    await expect(config.remoteRulesURL()).toBeVisible();

    await config
      .remoteRulesURL()
      .fill(
        'https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view',
      );
    await config.remoteRulesURL().blur();

    await expect(config.remoteSourceStatus()).toHaveText('loaded');

    const packlist = await config.toPacklistPage();

    await expect(packlist.item('Hello from Google Drive', false)).toBeVisible();
  });

  test('remote rules from Pastebin', async ({ page }) => {
    const config = await start(page).then((page) => page.toConfigPage());

    await config.rulesMode.remote().click();

    await expect(config.remoteRulesURL()).toBeVisible();

    await config.remoteRulesURL().fill('https://pastebin.com/ebFBBQZh');
    await config.remoteRulesURL().blur();

    await expect(config.remoteSourceStatus()).toHaveText('loaded');

    const packlist = await config.toPacklistPage();

    await expect(packlist.item('Hello from Pastebin', false)).toBeVisible();
  });

  test('remote rules from GitHub Gist', async ({ page }) => {
    const config = await start(page).then((page) => page.toConfigPage());

    await config.rulesMode.remote().click();

    await expect(config.remoteRulesURL()).toBeVisible();

    await config
      .remoteRulesURL()
      .fill(
        'https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple',
      );
    await config.remoteRulesURL().blur();

    await expect(config.remoteSourceStatus()).toHaveText('loaded');

    const packlist = await config.toPacklistPage();

    await expect(packlist.item('Hello from GitHub Gist', false)).toBeVisible();
  });

  test('remote rules from GitHub Repository', async ({ page }) => {
    const config = await start(page).then((page) => page.toConfigPage());

    await config.rulesMode.remote().click();

    await expect(config.remoteRulesURL()).toBeVisible();

    await config
      .remoteRulesURL()
      .fill(
        'https://github.com/dhhyi/travel-packlist-rules/blob/main/test-rules.txt',
      );
    await config.remoteRulesURL().blur();

    await expect(config.remoteSourceStatus()).toHaveText('loaded');

    const packlist = await config.toPacklistPage();

    await expect(packlist.item('Hello from GitHub Repo', false)).toBeVisible();
  });
});
