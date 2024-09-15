import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './items-status.component.html',
})
export class ItemsStatusComponent {
  count = input<number>(0);
  total = input<number>(0);
}
