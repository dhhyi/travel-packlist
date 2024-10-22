import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-flag-germany',
  standalone: true,
  templateUrl: './icon-flag-germany.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFlagGermanyComponent {
  class = input<string>('h-4 w-5');
}
