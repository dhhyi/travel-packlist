import { expect, type Page } from '@playwright/test';

import { Banner } from './banner';
import { ConfigPage } from './config-page';

export class PacklistPage extends Banner {
  constructor(page: Page) {
    super(page);
  }

  static async navigate(page: Page) {
    await page.goto('/');
    expect(await page.getByRole('banner').textContent()).toContain(
      'TravelPacklist',
    );
    return new PacklistPage(page);
  }

  async toConfigPage() {
    await this.configLink().click();
    return new ConfigPage(this.page);
  }

  itemPackingProgress() {
    return this.page.getByTitle('item packing progress');
  }

  weightPackingProgress() {
    return this.page.getByTitle('weight packing progress');
  }

  item(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }

  question(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }
}
