import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-paste',
  standalone: true,
  templateUrl: './icon-paste.component.html',
})
export class IconPasteComponent {
  class = input<string>('h-4 w-4');
}
