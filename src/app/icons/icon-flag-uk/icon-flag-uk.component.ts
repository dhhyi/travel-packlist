import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-flag-uk',
  standalone: true,
  templateUrl: './icon-flag-uk.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFlagUkComponent {
  class = input<string>('h-4 w-5');
}
