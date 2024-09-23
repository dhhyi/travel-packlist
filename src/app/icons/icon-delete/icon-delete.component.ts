import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-delete',
  standalone: true,
  templateUrl: './icon-delete.component.html',
})
export class IconDeleteComponent {
  class = input<string>('h-4 w-4');
}
