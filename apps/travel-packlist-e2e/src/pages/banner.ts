import { type Page } from '@playwright/test';
export class Banner {
  constructor(protected page: Page) {}

  protected configLink() {
    return this.page.getByLabel('Go to configuration');
  }

  protected banner() {
    return this.page.getByRole('banner');
  }
}
