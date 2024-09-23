import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-lock',
  standalone: true,
  templateUrl: './icon-lock.component.html',
})
export class IconLockComponent {
  class = input<string>('h-4 w-4');
}
