import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-lock-open',
  standalone: true,
  imports: [],
  templateUrl: './icon-lock-open.component.html',
})
export class IconLockOpenComponent {
  size = input<number>(18);
}
