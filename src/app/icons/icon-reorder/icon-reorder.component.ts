import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-reorder',
  standalone: true,
  imports: [],
  templateUrl: './icon-reorder.component.html',
})
export class IconReorderComponent {
  size = input<number>(18);
}
