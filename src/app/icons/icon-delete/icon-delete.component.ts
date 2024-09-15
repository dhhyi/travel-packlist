import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-delete',
  standalone: true,
  imports: [],
  templateUrl: './icon-delete.component.html',
})
export class IconDeleteComponent {
  size = input<number>(18);
}
