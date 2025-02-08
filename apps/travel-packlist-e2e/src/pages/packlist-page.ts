import { Banner } from './banner';
import { ConfigPage } from './config-page';

export class PacklistPage extends Banner {
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

  lockAnswersButton() {
    return this.page.getByRole('button', { name: 'Lock answers' });
  }

  displayStatisticsButton() {
    return this.page.getByRole('button', { name: 'Display statistics' });
  }

  item(name: string, checked: boolean | undefined = undefined) {
    return this.page.getByRole('checkbox', { name, checked });
  }

  question(name: string, checked: boolean) {
    return this.page.getByRole('checkbox', { name, checked });
  }
}
