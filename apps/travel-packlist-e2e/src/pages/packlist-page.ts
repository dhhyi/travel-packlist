import { expect, type Page } from '@playwright/test';

export class PacklistPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
    expect(await this.page.getByRole('banner').textContent()).toContain(
      'TravelPacklist',
    );
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
