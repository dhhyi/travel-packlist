import { type Page } from '@playwright/test';

import { PacklistPage } from './packlist-page';

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
    fn.confirm = () => {
      const button = dialog.locator(
        this.page.getByRole('button', { name: 'ok' }),
      );
      const fn = function () {
        return button;
      };
      fn.click = () => button.click();
      fn.clickToPacklist = () =>
        button.click().then(() => new PacklistPage(this.page));
      return fn;
    };
    fn.cancel = () =>
      dialog.locator(this.page.getByRole('button', { name: 'cancel' }));
    return fn;
  }
}
