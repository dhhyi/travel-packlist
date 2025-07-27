import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

const rules = `:- [Utility] Paper Tissues,[Utility] Backpack;
  :- Are you traveling longer than 3 days? $longer;
  longer :- [Electronics] Phone Charger, [Electronics] Tablet;
  :- Will it be sunny? $sunny, Will it be rainy? $rainy;
  sunny :- Do you expect a high UV index? $uv, [Utility] Sunglasses, [Clothes] Short Pants;
  rainy :- [Clothes] Rain Jacket;
  NOT rainy :- [Clothes] Jacket;
  NOT sunny :- [Clothes] Long Pants; uv :- [Utility] Sunscreen;`;

test('click items', async ({ page }) => {
  const packlist = await startWithRules(page, rules);

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 4 items."
  `);

  await packlist.question('Will it be rainy?', false).click();

  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  await packlist.item('Rain Jacket', false).click();
  await packlist.item('Pants', false).click();

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 2 out of 4 items."
  `);

  await expect(packlist.item('Rain Jacket', true)).toBeVisible();

  await packlist.item('Rain Jacket', true).click();

  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation:
      - banner "Go to TravelPacklist":
        - heading "TravelPacklist" [level=1]
      - link "Go to configuration"
    - checkbox "Are you traveling longer than 3 days?"
    - checkbox "Will it be sunny?"
    - checkbox "Will it be rainy?" [checked]
    - button "Lock answers"
    - button "Hide completed items"
    - progressbar "You have packed 1 out of 4 items."
    - list "Clothes":
      - listitem:
        - checkbox "Rain Jacket"
      - listitem:
        - checkbox "Long Pants" [checked]
    - list "Utility":
      - listitem:
        - checkbox "Paper Tissues"
      - listitem:
        - checkbox "Backpack"
  `);

  const config = await packlist.toConfigPage();

  await config.resetPackListButton().click();

  await expect(config.dialog()).toBeVisible();

  await expect(config.dialog()).toMatchAriaSnapshot(`
    - dialog:
      - text: Are you sure you want to reset the pack list?
      - button "Cancel"
      - button "OK"
  `);
  await expect(page).toHaveScreenshot();

  await config.dialog.confirm().click();

  await expect(config.dialog()).toBeHidden();

  await config.toPacklistPage();

  await expect(packlist.item('Pants', false)).toBeVisible();
  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 4 items."
  `);
});

test('skip items', async ({ page }) => {
  const packlist = await startWithRules(page, rules);

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 4 items."
  `);

  await packlist.question('Will it be rainy?', false).click();

  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  await packlist.item('Rain Jacket', false).dblclick();

  // double click does not change the state
  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  await packlist.item('Pants', false).click();

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 1 out of 4 items."
  `);

  const config = await packlist.toConfigPage();

  await config.skipItems().click();

  await expect(config.skipItems()).toBeChecked();

  await config.toPacklistPage();

  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  // double click skips
  await packlist.item('Rain Jacket').dblclick();

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 1 out of 3 items."
  `);

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('hide completed items', async ({ page }) => {
  const packlist = await startWithRules(page, rules).then((page) =>
    page.toConfigPage().then((config) =>
      config
        .skipItems()
        .click()
        .then(() => config.toPacklistPage()),
    ),
  );

  await packlist.question('Will it be rainy?', false).click();

  await packlist.item('Pants', false).click();

  await packlist.hideCompletedButton().click();

  await packlist.item('Rain Jacket').dblclick();
  await packlist.item('Paper Tissues', false).click();

  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 2 out of 3 items."
  `);

  await expect(page).toHaveScreenshot({ fullPage: true });
});
