import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-cog',
  standalone: true,
  templateUrl: './icon-cog.component.html',
})
export class IconCogComponent {
  class = input<string>('h-4 w-4');
}
