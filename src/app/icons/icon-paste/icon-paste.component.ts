import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-paste',
  standalone: true,
  imports: [],
  templateUrl: './icon-paste.component.html',
})
export class IconPasteComponent {
  size = input<number>(18);
}
