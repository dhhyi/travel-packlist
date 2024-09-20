import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IconCheckmarkComponent } from '../../../icons/icon-checkmark/icon-checkmark.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status',
  standalone: true,
  imports: [IconCheckmarkComponent],
  templateUrl: './items-status.component.html',
})
export class ItemsStatusComponent {
  count = input<number>(0);
  total = input<number>(0);
}
