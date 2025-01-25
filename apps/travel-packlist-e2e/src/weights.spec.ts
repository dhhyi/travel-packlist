import { test, expect } from '@playwright/test';

import { startWithRules } from './pages';

test('weight tracking', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    ':- [tool] umbrella 150, [tool] backpack 1kg;',
  );

  await expect(packlist.weightPackingProgress()).toBeHidden();
  await expect(packlist.itemPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0 out of 2 items."
  `);

  const config = await packlist.toConfigPage();

  await config.trackItemWeight().check();

  await expect(config.trackItemWeight()).toBeChecked();

  await config.toPacklistPage();

  await expect(packlist.itemPackingProgress()).toBeHidden();
  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 0g out of 1.1kg by packing 0 out of 2 items."
  `);

  await packlist.item('umbrella', false).click();

  await expect(packlist.weightPackingProgress()).toMatchAriaSnapshot(`
    - progressbar "You have packed 150g out of 1.1kg by packing 1 out of 2 items."
  `);
});
