import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-checkmark',
  standalone: true,
  imports: [],
  templateUrl: './icon-checkmark.component.html',
})
export class IconCheckmarkComponent {
  size = input<number>(18);
}
