import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';

import {
  PacklistFacade,
  serializeWeight,
  serializeWeightPartition,
} from '../packlist.facade';

@Component({
  selector: 'app-packlist-status',
  templateUrl: './packlist-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}