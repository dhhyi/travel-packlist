import { type Page } from '@playwright/test';
export class Banner {
  constructor(protected page: Page) {}

  configLink() {
    return this.page.getByLabel('Go to configuration');
  }

  banner() {
    return this.page.getByRole('banner');
  }
}
