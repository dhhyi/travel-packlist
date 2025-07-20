import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

const rulesWithWeights = `:- [tool] umbrella 150, [tool] backpack 1kg;
    :- Will it rain? $rainy;
    :- [clothes] jacket 350g, [clothes] t-shirt 200g, [clothes] shorts 200g;
    :- [food] sandwich 200g, [food] apple 100g, [food] water 1000g;
    :- [electronics] phone 200g, [electronics] charger 100g, [electronics] power bank 500g;`;

test('weight tracking', async ({ page }) => {
  const packlist = await startWithRules(page, rulesWithWeights);

  await expect(packlist.weightPackingProgress()).toBeHidden();
  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 11 items."
  `);

  const config = await packlist.toConfigPage();

  await config.trackItemWeight().click();
  await config.sortCategories.weight().click();
  await config.accessibility.compact().click();

  await expect(config.trackItemWeight()).toBeChecked();

  await config.toPacklistPage();

  await expect(packlist.itemPackingProgress()).toBeHidden();
  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0g out of 4.0kg by packing 0 out of 11 items."
  `);

  await packlist.item('umbrella', false).click();

  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 150g out of 4.0kg by packing 1 out of 11 items."
  `);
  await expect(page).toHaveScreenshot();

  await expect(packlist.displayWeightDistributionButton()).toBeVisible();

  await packlist.displayWeightDistributionButton().click();

  await expect(page).toHaveScreenshot({ fullPage: true });

  await expect(packlist.displayHeaviestItemsButton()).toBeVisible();

  await packlist.displayHeaviestItemsButton().click();

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('weight tracking activation', async ({ page }) => {
  test.slow();

  const packlist = await startWithRules(page, rulesWithWeights);

  await expect(packlist.weightPackingProgress()).toBeHidden();

  await expect(packlist.dialog()).toBeVisible();
  await expect(packlist.dialog()).toContainText('enable weight tracking');

  await packlist.dialog.confirm().click();

  await expect(packlist.weightPackingProgress()).toBeVisible();
});
