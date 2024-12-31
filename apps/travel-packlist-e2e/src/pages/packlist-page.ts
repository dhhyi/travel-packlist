import { expect, type Page } from '@playwright/test';

export class PacklistPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
    expect(await this.page.getByRole('navigation').textContent()).toContain(
      'TravelPacklist',
    );
  }

  itemPackingProgress() {
    return this.page.getByTitle('item packing progress');
  }

  item(name: string, pressed: boolean) {
    return this.page.getByRole('button', { name, pressed });
  }
}
