import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-edit',
  standalone: true,
  imports: [],
  templateUrl: './icon-edit.component.html',
})
export class IconEditComponent {
  size = input<number>(18);
}
