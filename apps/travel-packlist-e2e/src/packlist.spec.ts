import { test, expect } from '@playwright/test';

import { PacklistPage } from './pages/packlist-page';

test('click items', async ({ page }) => {
  const packlist = new PacklistPage(page);
  await packlist.navigate();

  await packlist.question('Will it be rainy?', false).click();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '0');
  await expect(packlist.item('Rain Jacket', false)).toBeVisible();

  await packlist.item('Rain Jacket', false).click();
  await packlist.item('Pants', false).click();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '2');
  await expect(packlist.item('Rain Jacket', true)).toBeVisible();

  await packlist.item('Rain Jacket', true).click();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '1');
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
});
