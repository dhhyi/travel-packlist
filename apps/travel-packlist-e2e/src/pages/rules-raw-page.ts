import { expect } from '@playwright/test';

import { Banner } from './banner';
import { ConfigPage } from './config-page';
import { PacklistPage } from './packlist-page';

export class RulesRawPage extends Banner {
  private readonly identifier = this.page.locator('app-edit-rules-raw');

  async toPacklistPage() {
    await this.banner().click();
    await expect(this.identifier).toBeHidden();
    return new PacklistPage(this.page);
  }

  async toConfigPage() {
    await this.configLink().click();
    await expect(this.identifier).toBeHidden();
    return new ConfigPage(this.page);
  }

  async toRulesDocumentationPage() {
    await this.page.getByLabel('Go to rules format help').click();
    await expect(this.identifier).toBeHidden();
  }

  rawRules() {
    return this.page.getByRole('textbox');
  }

  parserState() {
    return this.page.getByLabel('Parser state');
  }
}
