import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-cut',
  standalone: true,
  imports: [],
  templateUrl: './icon-cut.component.html',
})
export class IconCutComponent {
  size = input<number>(18);
}
