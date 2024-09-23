import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-view',
  standalone: true,
  templateUrl: './icon-view.component.html',
})
export class IconViewComponent {
  class = input<string>('h-4 w-4');
}
