import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-swap',
  standalone: true,
  imports: [],
  templateUrl: './icon-swap.component.html',
})
export class IconSwapComponent {
  size = input<number>(18);
}
