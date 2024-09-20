import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-lock-open',
  standalone: true,
  imports: [],
  templateUrl: './icon-lock-open.component.html',
})
export class IconLockOpenComponent {
  size = input<number>(18);
}
