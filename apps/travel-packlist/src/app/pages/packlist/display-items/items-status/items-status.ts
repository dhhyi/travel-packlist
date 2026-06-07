import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IconCheckmark } from '@travel-packlist/icons';

@Component({
  selector: 'app-items-status',
  imports: [IconCheckmark],
  templateUrl: './items-status.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsStatus {
  readonly count = input(0);
  readonly total = input(0);
}
