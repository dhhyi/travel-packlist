import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IconCheckmarkComponent } from '@travel-packlist/icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-items-status',
  imports: [IconCheckmarkComponent],
  templateUrl: './items-status.component.html',
})
export class ItemsStatusComponent {
  readonly count = input<number>(0);
  readonly total = input<number>(0);
}