import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-cog',
  standalone: true,
  imports: [],
  templateUrl: './icon-cog.component.html',
})
export class IconCogComponent {
  size = input<number>(18);
}
