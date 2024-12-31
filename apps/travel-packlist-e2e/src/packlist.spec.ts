import { test, expect } from '@playwright/test';

import { PacklistPage } from './pages/packlist-page';

test('click items', async ({ page }) => {
  const packlist = new PacklistPage(page);
  await packlist.navigate();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '0');
  await expect(packlist.item('Jacket', false)).toBeVisible();

  await packlist.item('Jacket', false).click();
  await packlist.item('Pants', false).click();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '2');
  await expect(packlist.item('Jacket', true)).toBeVisible();

  await packlist.item('Jacket', true).click();

  await expect(packlist.itemPackingProgress()).toHaveAttribute('value', '1');
  await expect(packlist.item('Jacket', false)).toBeVisible();
});
