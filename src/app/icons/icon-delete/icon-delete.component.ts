import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-delete',
  standalone: true,
  imports: [],
  templateUrl: './icon-delete.component.html',
})
export class IconDeleteComponent {
  size = input<number>(18);
}
