import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-clear',
  standalone: true,
  templateUrl: './icon-clear.component.html',
})
export class IconClearComponent {
  class = input<string>('h-4 w-4');
}
