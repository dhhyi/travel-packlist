import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-lock-open',
  standalone: true,
  templateUrl: './icon-lock-open.component.html',
})
export class IconLockOpenComponent {
  class = input<string>('h-4 w-4');
}
