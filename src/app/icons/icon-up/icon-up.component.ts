import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-up',
  standalone: true,
  templateUrl: './icon-up.component.html',
})
export class IconUpComponent {
  class = input<string>('h-4 w-4');
}
