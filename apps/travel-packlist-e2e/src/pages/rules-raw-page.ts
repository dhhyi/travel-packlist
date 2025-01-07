import { expect, type Page } from '@playwright/test';

import { Banner } from './banner';
import { ConfigPage } from './config-page';

export class RulesRawPage extends Banner {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto('/');
    const config = new ConfigPage(this.page);
    await config.navigate();
    await config.editRulesWithCode().click();
    await expect(this.rawRules()).toBeVisible();
  }

  rawRules() {
    return this.page.getByRole('textbox');
  }

  parserState() {
    return this.page.getByLabel('Parser state');
  }
}
