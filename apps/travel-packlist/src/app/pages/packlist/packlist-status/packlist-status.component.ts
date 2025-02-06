import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ProgressComponent } from '@travel-packlist/components';
import {
  IconLockComponent,
  IconLockOpenComponent,
} from '@travel-packlist/icons';

import {
  PacklistFacade,
  serializeWeight,
  serializeWeightPartition,
} from '../packlist.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist-status',
  templateUrl: './packlist-status.component.html',
  imports: [IconLockOpenComponent, IconLockComponent, ProgressComponent],
})
export class PacklistStatusComponent {
  private facade = inject(PacklistFacade);
  questionsAvailable = this.facade.questionsAvailable;
  isAnswersLockActive = this.facade.isAnswersLockActive;
  toggleAnswersLock = this.facade.toggleAnswersLock;
  trackWeight = this.facade.trackWeight;
  checkedWeight = this.facade.checkedWeight;
  totalWeight = this.facade.totalWeight;
  numberOfCheckedItems = this.facade.numberOfCheckedItems;
  numberOfItems = this.facade.numberOfItems;

  serializeWeightPartition = serializeWeightPartition;

  readonly statusLabelText = computed(() => {
    const totalWeight = this.facade.totalWeight();
    const checkedWeight = this.facade.checkedWeight();
    const checkedItems = this.facade.numberOfCheckedItems().toString();
    const totalItems = this.facade.numberOfItems().toString();

    if (this.facade.trackWeight()) {
      return $localize`You have packed ${serializeWeight(checkedWeight, undefined, 1)}:CHECKED_WEIGHT: out of ${serializeWeight(totalWeight, undefined, 1)}:TOTAL_WEIGHT: by packing ${checkedItems}:CHECKED_ITEMS: out of ${totalItems}:TOTAL_ITEMS: items.`;
    } else {
      return $localize`You have packed ${checkedItems}:CHECKED_ITEMS: out of ${totalItems}:TOTAL_ITEMS: items.`;
    }
  });

  readonly animationDuration = signal(0);

  constructor() {
    afterRender(() => {
      this.animationDuration.set(this.facade.animationsEnabled() ? 500 : 0);
    });
  }
}
