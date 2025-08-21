import { expect, test } from '@playwright/test';

import { start } from './pages';

test('happy path editor to packlist', async ({ page }) => {
  const config = await start(page).then((page) => page.toConfigPage());

  await config.rulesMode.template().click();
  await config.template('empty').click();
  await config.copyRulesLocallyButton().click();

  await expect(config.rulesMode.local()).toBeEnabled();

  const editor = await config.toEditorPage();

  // finds example rule
  await expect(editor.toolbar.mode('view')).toBeChecked();

  // delete example rule
  await editor.toolbar.mode('delete').click();
  await editor.rule(1).deleteButton().click();
  await editor.dialog.confirm().click();

  await editor.addRuleButton.click();

  await expect(editor.toolbar.mode('edit')).toBeChecked();

  await expect(editor.rulesTitle()).toBeVisible();

  await editor.rulesTitle().fill('My Rules');

  const rule1 = editor.rule(1);

  await expect(rule1()).toBeVisible();

  await rule1.condition.variable(1).selectOption('always');

  expect(await rule1.condition.noErrors()).toBe(true);

  await rule1.addQuestionButton().click();

  await expect(rule1.question(1)()).toBeVisible();

  await rule1.question(1).question().fill('Will it be sunny?');
  await rule1.question(1).variable().fill('sunny');

  expect(await rule1.question(1).noErrors()).toBe(true);

  await rule1.addQuestionButton().click();

  await expect(rule1.question(2)()).toBeVisible();

  await rule1.question(2).question().fill('Will it be rainy?');
  await rule1.question(2).variable().fill('rainy');

  expect(await rule1.question(2).noErrors()).toBe(true);

  await editor.addRuleButton.click();
  const rule2 = editor.rule(2);

  await expect(rule2()).toBeVisible();

  await rule2.condition.variable(1).selectOption('sunny');

  expect(await rule2.condition.noErrors()).toBe(true);

  await rule2.condition.variable(1).selectOption('sunny AND x');

  expect(await rule2.condition.noErrors()).toBe(true);

  await rule2.condition.variable(2).selectOption('NOT x');

  expect(await rule2.condition.noErrors()).toBe(true);

  await rule2.condition.variable(2).selectOption('rainy');

  expect(await rule2.condition.noErrors()).toBe(true);

  await rule2.addItemButton().click();

  await expect(rule2.item(1)()).toBeVisible();

  await rule2.item(1).itemName().fill('Sunscreen');

  expect(await rule2.item(1).noErrors()).toBe(true);

  await rule2.item(1).category().selectOption('+');

  await expect(editor.dialog()).toBeVisible();

  await editor.dialog.prompt().fill('Toiletries');
  await editor.dialog.confirm().click();

  await expect(editor.dialog()).toBeHidden();
  expect(await rule2.item(1).noErrors()).toBe(true);

  await expect(rule2.item(1).category()).toHaveValue('Toiletries');

  await expect(page).toHaveScreenshot();

  await rule2().hover();
  await page.mouse.wheel(0, 500);

  await expect(page).toHaveScreenshot();

  await editor.toConfigPage();

  const session = await config.startSession();

  await expect(session.slot(1)()).toBeVisible();

  await session.slot(1).click();

  await expect(session.dialog()).toBeVisible();

  await session.dialog.prompt().fill('My Session');
  const packlist = await session.dialog.confirm().clickToPacklist();

  await expect(packlist.dialog()).toBeHidden();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "My Rules"
    - heading "My Session"
    - checkbox "Will it be sunny?"
    - checkbox "Will it be rainy?"
    - button "Lock answers"
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);

  await packlist.question('Will it be sunny?', false).click();
  await packlist.lockAnswersButton().click();

  await expect(packlist.item('Sunscreen', false)).toBeVisible();

  await packlist.item('Sunscreen', false).click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "My Rules"
    - checkbox "Will it be sunny?" [checked] [disabled]
    - button "Lock answers" [pressed]
    - progressbar "You have packed 1 out of 1 items."
    - list "Toiletries":
      - listitem:
        - checkbox "Sunscreen" [checked]
  `);

  await expect(page).toHaveScreenshot();
});
