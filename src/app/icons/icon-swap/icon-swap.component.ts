import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-swap',
  standalone: true,
  templateUrl: './icon-swap.component.html',
})
export class IconSwapComponent {
  class = input<string>('h-4 w-4');
}
