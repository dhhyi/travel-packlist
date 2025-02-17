import { expect } from '@playwright/test';

import { Banner } from './banner';
import { ConfigPage } from './config-page';

export class PacklistPage extends Banner {
  private readonly identifier = this.page.locator('app-packlist');

  async toConfigPage() {
    await this.configLink().click();
    await expect(this.identifier).toBeHidden();
    return new ConfigPage(this.page);
  }

  itemPackingProgress() {
    return this.page.getByTitle('item packing progress');
  }

  weightPackingProgress() {
    return this.page.getByTitle('weight packing progress');
  }

  lockAnswersButton() {
    return this.page.getByRole('button', { name: 'Lock answers' });
  }

  displayWeightDistributionButton() {
    return this.page.getByRole('button', {
      name: 'Display weight distribution',
    });
  }

  displayHeaviestItemsButton() {
    return this.page.getByRole('button', { name: 'Display heaviest items' });
  }

  item(name: string, checked: boolean | undefined = undefined) {
    return this.page.getByRole('checkbox', { name, checked });
  }

  question(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }
}
