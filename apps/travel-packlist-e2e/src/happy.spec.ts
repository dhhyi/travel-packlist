import { test, expect } from '@playwright/test';

import { startWithRules } from './pages';

test('happy path editor to packlist', async ({ page }) => {
  const editor = await startWithRules(page, '')
    .then((page) => page.toConfigPage())
    .then((page) => page.toEditorPage());

  await editor.addRuleButton.click();
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

  const packlist = await editor.toPacklistPage();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - checkbox "Will it be sunny?"
    - checkbox "Will it be rainy?"
    - button "Lock answers"
    - progressbar "You have packed 0 out of 0 items."
    - paragraph: No items available.
  `);

  await packlist.question('Will it be sunny?', false).check();
  await packlist.lockAnswersButton().click();

  await expect(packlist.item('Sunscreen', false)).toBeVisible();

  await packlist.item('Sunscreen', false).check();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - checkbox "Will it be sunny?" [checked] [disabled]
    - button "Lock answers" [pressed]
    - progressbar "You have packed 1 out of 1 items."
    - list "Toiletries":
      - listitem:
        - checkbox "Sunscreen" [checked]
  `);
});
