import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-edit',
  standalone: true,
  templateUrl: './icon-edit.component.html',
})
export class IconEditComponent {
  class = input<string>('h-4 w-4');
}
