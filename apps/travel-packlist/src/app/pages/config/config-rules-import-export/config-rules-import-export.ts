import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Checkbox } from '@travel-packlist/components';
import { IconDownload } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';
import { RulesShare } from '../../../services/rules-share/rules-share.interface';

@Component({
  selector: 'app-config-rules-import-export',
  imports: [Checkbox, IconDownload, FormField],
  templateUrl: './config-rules-import-export.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesImportExport {
  private state = inject(GLOBAL_STATE);
  private rulesShare = inject(RulesShare);

  exportReminder = form(this.state.config.exportReminder);
  exportNeeded = this.state.rules.exportNeeded;

  readonly loading = signal(false);

  async importRules() {
    this.loading.set(true);
    if (await this.triggerImportRules()) {
      this.state.router.go('packlist');
    }
    this.loading.set(false);
  }

  isExportAvailable(): boolean {
    return this.state.rules.localRulesAvailable();
  }

  async exportRules() {
    await this.rulesShare.exportRules();
    this.state.rules.markAsCurrent();
  }

  private async triggerImportRules() {
    if (
      this.state.rules.exportNeeded() &&
      !(await confirm(
        $localize`You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?`,
      ))
    ) {
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt';
      input.addEventListener('cancel', () => {
        resolve(false);
      });
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) {
          resolve(false);
          return;
        }
        const text = await file.text();
        this.state.localRules.updateRules(text);
        this.state.rules.markAsCurrent();
        resolve(true);
      };
      input.click();
    });
  }
}
