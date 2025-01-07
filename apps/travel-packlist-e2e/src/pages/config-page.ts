import { expect, type Page } from '@playwright/test';

import { PacklistPage } from './packlist-page';

export class ConfigPage {
  constructor(private page: Page) {}

  async navigate() {
    const packlist = new PacklistPage(this.page);
    await packlist.navigate();
    await expect(packlist.configLink()).toBeVisible();
    await packlist.configLink().click();
    await expect(packlist.configLink()).toBeHidden();
  }
}
