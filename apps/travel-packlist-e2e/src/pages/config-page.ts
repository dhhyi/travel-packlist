import { expect } from '@playwright/test';

import { Banner } from './banner';
import { EditorPage } from './editor-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';

export class ConfigPage extends Banner {
  private readonly identifier = this.page.locator('app-config');

  async toPacklistPage() {
    await this.banner().click();
    await expect(this.identifier).toBeHidden();
    return new PacklistPage(this.page);
  }

  trackItemWeight() {
    return this.page.getByRole('checkbox', {
      name: 'Track item weight',
    });
  }

  skipItems() {
    return this.page.getByRole('checkbox', {
      name: 'Allow skipping items',
    });
  }

  get rulesMode() {
    const rulesMode = this.page.getByRole('radiogroup', {
      name: 'Rules mode',
    });
    const fn = function () {
      return rulesMode;
    };
    fn.remote = () =>
      rulesMode.locator(this.page.getByRole('radio', { name: 'remote' }));
    fn.local = () =>
      rulesMode.locator(this.page.getByRole('radio', { name: 'local' }));
    return fn;
  }

  remoteRulesURL() {
    return this.page.getByRole('textbox', {
      name: 'Remote rules source',
    });
  }

  remoteSourceStatus() {
    return this.page.getByRole('status', {
      name: 'Remote source status',
    });
  }

  copyRulesLocallyButton() {
    return this.page.getByRole('button', {
      name: 'Copy rules locally',
    });
  }

  private editRulesWithCodeButton() {
    return this.page.getByRole('button', { name: 'Edit rules with code' });
  }

  private viewRulesCodeButton() {
    return this.page.getByRole('button', { name: 'View rules code' });
  }

  async toRulesRawPage() {
    if (await this.rulesMode.local().isChecked()) {
      await this.editRulesWithCodeButton().click();
    } else {
      await this.viewRulesCodeButton().click();
    }
    await expect(this.identifier).toBeHidden();
    return new RulesRawPage(this.page);
  }

  private editRulesButton() {
    return this.page.getByRole('button', { name: 'Edit Rules', exact: true });
  }

  async toEditorPage() {
    await this.editRulesButton().click();
    await expect(this.identifier).toBeHidden();
    return new EditorPage(this.page);
  }

  exportNeededAlert() {
    return this.page
      .getByRole('alert')
      .and(this.page.getByLabel('Export needed', { exact: true }));
  }

  resetChecklistButton() {
    return this.page.getByRole('button', {
      name: 'Reset Checklist',
      exact: true,
    });
  }

  resetApplicationButton() {
    return this.page.getByRole('button', {
      name: 'Reset Application',
      exact: true,
    });
  }

  get accessibility() {
    const accessibility = this.page.getByRole('radiogroup', {
      name: 'Accessibility',
    });
    const fn = function () {
      return accessibility;
    };
    fn.compact = () =>
      accessibility.locator(this.page.getByRole('radio', { name: 'compact' }));
    return fn;
  }
}
