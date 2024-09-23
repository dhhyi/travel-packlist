import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-down',
  standalone: true,
  templateUrl: './icon-down.component.html',
})
export class IconDownComponent {
  class = input<string>('h-4 w-4');
}
