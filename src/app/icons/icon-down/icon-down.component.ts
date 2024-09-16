import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-down',
  standalone: true,
  imports: [],
  templateUrl: './icon-down.component.html',
})
export class IconDownComponent {
  size = input<number>(18);
}
