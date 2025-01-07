import { expect, type Page } from '@playwright/test';

import { Banner } from './banner';
import { PacklistPage } from './packlist-page';

export class ConfigPage extends Banner {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    const packlist = new PacklistPage(this.page);
    await packlist.navigate();
    await expect(packlist.configLink()).toBeVisible();
    await packlist.configLink().click();
    await expect(packlist.configLink()).toBeHidden();
  }

  editRulesWithCode() {
    return this.page.getByRole('button', { name: 'Edit rules with code' });
  }
}
