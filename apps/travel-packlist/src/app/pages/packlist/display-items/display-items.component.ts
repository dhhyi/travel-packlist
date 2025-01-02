import { NgClass } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  IconKeyDownComponent,
  IconKeyRightComponent,
} from '@travel-packlist/icons';

import {
  PacklistFacade,
  serializeWeight,
  serializeWeightPartition,
} from '../packlist.facade';
import { ItemsStatusComponent } from './items-status/items-status.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-items',
  imports: [
    ItemsStatusComponent,
    NgClass,
    IconKeyDownComponent,
    IconKeyRightComponent,
  ],
  templateUrl: './display-items.component.html',
})
export class DisplayItemsComponent {
  facade = inject(PacklistFacade);

  serializeWeight = serializeWeight;

  serializeWeightPartition = serializeWeightPartition;
}
