import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-reorder',
  standalone: true,
  imports: [],
  templateUrl: './icon-reorder.component.html',
})
export class IconReorderComponent {
  size = input<number>(18);
}
