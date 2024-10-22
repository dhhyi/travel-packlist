import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-key-down',
  standalone: true,
  templateUrl: './icon-key-down.component.html',
})
export class IconKeyDownComponent {
  class = input<string>('h-4 w-4');
}
