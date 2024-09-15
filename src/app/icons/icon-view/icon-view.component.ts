import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-view',
  standalone: true,
  imports: [],
  templateUrl: './icon-view.component.html',
})
export class IconViewComponent {
  size = input<number>(18);
}
