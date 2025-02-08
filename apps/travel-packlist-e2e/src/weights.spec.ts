import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

test('weight tracking', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    `:- [tool] umbrella 150, [tool] backpack 1kg;
    :- Will it rain? $rainy;
    :- [clothes] raincoat 500g, [clothes] t-shirt 200g, [clothes] shorts 300g;
    :- [food] sandwich 200g, [food] apple 100g, [food] water 590g;`,
  );

  await expect(packlist.weightPackingProgress()).toBeHidden();
  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 8 items."
  `);

  const config = await packlist.toConfigPage();

  await config.trackItemWeight().check();
  await config.accessibility.compact().check();

  await expect(config.trackItemWeight()).toBeChecked();

  await config.toPacklistPage();

  await expect(packlist.itemPackingProgress()).toBeHidden();
  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0g out of 3.0kg by packing 0 out of 8 items."
  `);

  await packlist.item('umbrella', false).click();

  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 150g out of 3.0kg by packing 1 out of 8 items."
  `);
  await expect(page).toHaveScreenshot();

  await expect(packlist.displayStatisticsButton()).toBeVisible();

  await packlist.displayStatisticsButton().click();

  await expect(page).toHaveScreenshot();
});
