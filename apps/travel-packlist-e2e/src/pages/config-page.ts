import { Banner } from './banner';
import { EditorPage } from './editor-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';

export class ConfigPage extends Banner {
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

  skipItems() {
    return this.page.getByRole('checkbox', {
      name: 'Allow skipping items',
    });
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
