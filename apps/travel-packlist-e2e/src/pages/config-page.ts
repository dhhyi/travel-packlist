import { type Page } from '@playwright/test';

import { Banner } from './banner';
import { EditorPage } from './editor-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';

export class ConfigPage extends Banner {
  constructor(page: Page) {
    super(page);
  }

  async toPacklistPage() {
    await this.banner().click();
    return new PacklistPage(this.page);
  }

  private editRulesWithCodeButton() {
    return this.page.getByRole('button', { name: 'Edit rules with code' });
  }

  async toRulesRawPage() {
    await this.editRulesWithCodeButton().click();
    return new RulesRawPage(this.page);
  }

  private editRulesButton() {
    return this.page.getByRole('button', { name: 'Edit Rules', exact: true });
  }

  async toEditorPage() {
    await this.editRulesButton().click();
    return new EditorPage(this.page);
  }

  trackItemWeight() {
    return this.page.getByRole('checkbox', {
      name: 'Track item weight',
    });
  }
}
