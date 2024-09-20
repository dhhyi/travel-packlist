import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-checkmark',
  standalone: true,
  imports: [],
  templateUrl: './icon-checkmark.component.html',
})
export class IconCheckmarkComponent {
  size = input<number>(18);
}
