import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-down',
  standalone: true,
  imports: [],
  templateUrl: './icon-down.component.html',
})
export class IconDownComponent {
  size = input<number>(18);
}
