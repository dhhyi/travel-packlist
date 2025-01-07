import { expect, type Page } from '@playwright/test';

export class PacklistPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
    expect(await this.page.getByRole('banner').textContent()).toContain(
      'TravelPacklist',
    );
  }

  configLink() {
    return this.page.getByLabel('Go to configuration');
  }

  itemPackingProgress() {
    return this.page.getByTitle('item packing progress');
  }

  item(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }

  question(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }
}
