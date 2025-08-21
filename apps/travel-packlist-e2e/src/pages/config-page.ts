import { expect } from '@playwright/test';

import { Banner } from './banner';
import { EditorPage } from './editor-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';
import { SessionPage } from './session-page';

export class ConfigPage extends Banner {
  private readonly identifier = this.page.locator('app-config');

  async toPacklistPage() {
    await this.banner().click();
    await expect(this.identifier).toBeHidden();
    return new PacklistPage(this.page);
  }

  resetPackListButton() {
    return this.page.getByRole('button', {
      name: 'Reset Pack List',
      exact: true,
    });
  }

  async startSession() {
    return this.page
      .getByRole('button', {
        name: 'Start Session',
        exact: true,
      })
      .click()
      .then(() => new SessionPage(this.page));
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

  get sortCategories() {
    const sortCategories = this.page.getByRole('radiogroup', {
      name: 'Sort categories',
    });
    const fn = function () {
      return sortCategories;
    };
    fn.alphabetical = () =>
      sortCategories.locator(
        this.page.getByRole('radio', { name: 'alphabetically' }),
      );
    fn.definition = () =>
      sortCategories.locator(
        this.page.getByRole('radio', { name: 'by definition' }),
      );
    fn.weight = () =>
      sortCategories.locator(
        this.page.getByRole('radio', { name: 'by weight' }),
      );
    return fn;
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
    fn.template = () =>
      rulesMode.locator(this.page.getByRole('radio', { name: 'template' }));
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

  remoteHistoryButton() {
    return this.page.getByRole('button', {
      name: 'Load source from history',
    });
  }

  get remoteHistory() {
    const history = this.page.getByRole('list', {
      name: 'Remote source history',
    });
    const fn = function () {
      return history;
    };
    fn.item = (idx: number) =>
      history.locator(this.page.getByRole('listitem').nth(idx));
    return fn;
  }

  template(name: string) {
    return this.page
      .getByRole('radiogroup', { name: 'Rules Template' })
      .locator(this.page.getByRole('radio', { name, exact: false }));
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

  animations() {
    return this.page.getByRole('checkbox', {
      name: 'Animations',
    });
  }
}
