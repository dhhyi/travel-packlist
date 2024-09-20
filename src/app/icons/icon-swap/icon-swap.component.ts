import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-swap',
  standalone: true,
  imports: [],
  templateUrl: './icon-swap.component.html',
})
export class IconSwapComponent {
  size = input<number>(18);
}
