import { computed, inject, Injectable } from '@angular/core';
import { Refactor } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../dialog';
import { RulesShare } from '../../services/rules-share/rules-share.interface';

@Injectable({ providedIn: 'root' })
export class ConfigFacade {
  private state = inject(GLOBAL_STATE);
  private rulesShare = inject(RulesShare);
  private refactor = inject(Refactor);

  private readonly percentageOfItemsWithWeights = computed(() => {
    if (!this.state.rules.parserError()) {
      const { items, weights } = this.refactor.countItemsAndWeights(
        this.state.rules.parsed(),
      );
      return weights / items;
    }
    return 0;
  });

  private resetHash() {
    this.state.export.lastHash.set(this.state.rules.hash());
    this.state.export.lastDate.set(new Date().getTime());
  }

  isExportAvailable(): boolean {
    return !!this.state.rules.customized();
  }

  async exportRules() {
    await this.rulesShare.exportRules();
    this.resetHash();
  }

  async importRules() {
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
        this.state.rules.raw.set(text);
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
      !this.state.config.trackWeight() &&
      this.percentageOfItemsWithWeights() > 0.1
    ) {
      if (
        await confirm(
          $localize`It seems that the imported rules contain items with weights. Shall we enable the weight tracking?`,
        )
      ) {
        this.state.config.trackWeight.set(true);
      }
    }
  }

  resetChecklist() {
    this.state.packlist.reset();
  }
}
