import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-up',
  standalone: true,
  imports: [],
  templateUrl: './icon-up.component.html',
})
export class IconUpComponent {
  size = input<number>(18);
}
