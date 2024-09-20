import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-paste',
  standalone: true,
  imports: [],
  templateUrl: './icon-paste.component.html',
})
export class IconPasteComponent {
  size = input<number>(18);
}
