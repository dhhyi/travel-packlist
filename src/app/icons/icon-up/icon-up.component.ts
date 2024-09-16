import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-up',
  standalone: true,
  imports: [],
  templateUrl: './icon-up.component.html',
})
export class IconUpComponent {
  size = input<number>(18);
}
