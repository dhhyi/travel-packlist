import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-edit',
  standalone: true,
  imports: [],
  templateUrl: './icon-edit.component.html',
})
export class IconEditComponent {
  size = input<number>(18);
}
