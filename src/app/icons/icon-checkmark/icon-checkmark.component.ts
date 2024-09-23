import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-checkmark',
  standalone: true,
  templateUrl: './icon-checkmark.component.html',
})
export class IconCheckmarkComponent {
  class = input<string>('h-4 w-4');
}
