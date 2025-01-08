import { type Page } from '@playwright/test';
export class Banner {
  constructor(protected page: Page) {}

  protected configLink() {
    return this.page.getByLabel('Go to configuration');
  }

  protected banner() {
    return this.page.getByRole('banner');
  }

  get dialog() {
    const dialog = this.page.getByRole('dialog');
    const fn = function () {
      return dialog;
    };
    fn.prompt = () => dialog.locator(this.page.getByRole('textbox'));
    fn.confirm = () =>
      dialog.locator(this.page.getByRole('button', { name: 'ok' }));
    fn.cancel = () =>
      dialog.locator(this.page.getByRole('button', { name: 'cancel' }));
    return fn;
  }
}
