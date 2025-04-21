import { effect, inject, Injectable } from '@angular/core';
import { Refactor } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../dialog';

@Injectable({ providedIn: 'root' })
export class WeightTrackingCheck {
  private state = inject(GLOBAL_STATE);
  private refactor = inject(Refactor);

  private readonly percentageOfItemsWithWeights = () => {
    if (this.state.rules.parsed.hasValue()) {
      const { items, weights } = this.refactor.countItemsAndWeights(
        this.state.rules.parsed.value(),
      );
      return weights / items;
    }
    return 0;
  };

  private readonly askedFor = this.state.packlist.askedWeightTracking;

  private async promptEnableWeightTracking() {
    if (
      !this.state.config.trackWeight() &&
      this.percentageOfItemsWithWeights() > 0.1 &&
      this.askedFor() !== 'activation'
    ) {
      this.askedFor.set('activation');
      if (
        await confirm(
          $localize`The loaded rules contain items with weights. Would you like to enable weight tracking?`,
        )
      ) {
        this.state.config.trackWeight.set(true);
      }
    }
  }

  private async promptDisableWeightTracking() {
    if (
      this.state.config.trackWeight() &&
      this.percentageOfItemsWithWeights() <= 0 &&
      this.askedFor() !== 'deactivation'
    ) {
      this.askedFor.set('deactivation');
      if (
        await confirm(
          $localize`The loaded rules contain no items with weights. Would you like to disable weight tracking?`,
        )
      ) {
        this.state.config.trackWeight.set(false);
      }
    }
  }

  init() {
    let timeout: number | undefined;
    effect(() => {
      this.state.rules.parsed.value();

      if (timeout) {
        clearTimeout(timeout);
      }

      if (this.state.router.path().startsWith('/packlist')) {
        timeout = setTimeout(() => {
          void this.promptEnableWeightTracking();
          void this.promptDisableWeightTracking();
        }, 2000);
      }
    });
  }
}
