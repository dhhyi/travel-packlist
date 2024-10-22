import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-key-right',
  standalone: true,
  templateUrl: './icon-key-right.component.html',
})
export class IconKeyRightComponent {
  class = input<string>('h-4 w-4');
}
