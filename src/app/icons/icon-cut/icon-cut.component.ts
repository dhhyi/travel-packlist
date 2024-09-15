import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-cut',
  standalone: true,
  imports: [],
  templateUrl: './icon-cut.component.html',
})
export class IconCutComponent {
  size = input<number>(18);
}
