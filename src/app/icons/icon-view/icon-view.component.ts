import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-view',
  standalone: true,
  imports: [],
  templateUrl: './icon-view.component.html',
})
export class IconViewComponent {
  size = input<number>(18);
}
