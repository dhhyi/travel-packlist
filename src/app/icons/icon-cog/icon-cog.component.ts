import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-cog',
  standalone: true,
  imports: [],
  templateUrl: './icon-cog.component.html',
})
export class IconCogComponent {
  size = input<number>(18);
}
