import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-lock',
  standalone: true,
  imports: [],
  templateUrl: './icon-lock.component.html',
})
export class IconLockComponent {
  size = input<number>(18);
}
