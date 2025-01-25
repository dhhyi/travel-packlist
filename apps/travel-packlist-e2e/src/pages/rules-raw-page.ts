import { Banner } from './banner';
import { ConfigPage } from './config-page';
import { PacklistPage } from './packlist-page';

export class RulesRawPage extends Banner {
  async toPacklistPage() {
    await this.banner().click();
    return new PacklistPage(this.page);
  }

  async toConfigPage() {
    await this.configLink().click();
    return new ConfigPage(this.page);
  }

  rawRules() {
    return this.page.getByRole('textbox');
  }

  parserState() {
    return this.page.getByLabel('Parser state');
  }
}
