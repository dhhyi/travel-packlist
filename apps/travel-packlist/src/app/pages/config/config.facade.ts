import { inject, Injectable } from '@angular/core';
import { GlobalState } from '@travel-packlist/state';

import { confirm } from '../../dialog';
import { RulesShare } from '../../services/rules-share/rules-share.interface';

@Injectable({ providedIn: 'root' })
export class ConfigFacade {
  private state = inject(GlobalState);
  private rulesShare = inject(RulesShare);

  private resetHash() {
    this.state.set('lastExportHash', this.state.get('rulesHash'));
    this.state.set('lastExportDate', new Date().getTime());
  }

  isExportAvailable(): boolean {
    return !!this.state.get('rules');
  }

  async exportRules() {
    await this.rulesShare.exportRules();
    this.resetHash();
  }

  async importRules() {
    if (
      this.state.get('exportNeeded') &&
      !(await confirm(
        $localize`:@@config.rules.import.export-first:You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?` as string,
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
        this.state.set('rules', text);
        this.resetHash();

        setTimeout(() => {
          void this.promptEnableWeightTracking();
        }, 2000);

        this.resetChecklist();
        resolve(true);
      };
      input.click();
    });
  }

  private async promptEnableWeightTracking() {
    if (
      this.state.get('percentageOfItemsWithWeights') > 0.1 &&
      !this.state.get('trackWeight')
    ) {
      if (
        await confirm(
          $localize`:@@config.rules.import.suggest-track-weight:It seems that the imported rules contain items with weights. Shall we enable the weight tracking?` as string,
        )
      ) {
        this.state.set('trackWeight', true);
      }
    }
  }

  resetChecklist() {
    this.state.set('answers', {});
    this.state.set('checkedItems', []);
    this.state.set('collapsedCategories', []);
    this.state.set('answersLocked', false);
  }
}
