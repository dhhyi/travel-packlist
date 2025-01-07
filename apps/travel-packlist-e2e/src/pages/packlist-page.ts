import { expect, type Page } from '@playwright/test';

import { Banner } from './banner';

export class PacklistPage extends Banner {
  constructor(page: Page) {
    super(page);
  }

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
