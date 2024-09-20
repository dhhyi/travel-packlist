import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-lock',
  standalone: true,
  imports: [],
  templateUrl: './icon-lock.component.html',
})
export class IconLockComponent {
  size = input<number>(18);
}
