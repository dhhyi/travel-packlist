import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-cut',
  standalone: true,
  templateUrl: './icon-cut.component.html',
})
export class IconCutComponent {
  class = input<string>('h-4 w-4');
}
