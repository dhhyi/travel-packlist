import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IconCheckmarkComponent } from '@travel-packlist/icons';

@Component({
  selector: 'app-items-status',
  imports: [IconCheckmarkComponent],
  templateUrl: './items-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsStatusComponent {
  readonly count = input(0);
  readonly total = input(0);
}
