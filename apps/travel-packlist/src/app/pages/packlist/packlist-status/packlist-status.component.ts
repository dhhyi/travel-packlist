import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ComponentsModule } from '@travel-packlist/components';

import {
  PacklistFacade,
  serializeWeight,
  serializeWeightPartition,
} from '../packlist.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist-status',
  templateUrl: './packlist-status.component.html',
  imports: [ComponentsModule],
})
export class PacklistStatusComponent {
  facade = inject(PacklistFacade);

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
      this.animationDuration.set(this.facade.isAccessibleMode() ? 0 : 500);
    });
  }
}
