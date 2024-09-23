import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-reorder',
  standalone: true,
  templateUrl: './icon-reorder.component.html',
})
export class IconReorderComponent {
  class = input<string>('h-4 w-4');
}
