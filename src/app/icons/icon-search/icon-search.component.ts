import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-search',
  standalone: true,
  templateUrl: './icon-search.component.html',
})
export class IconSearchComponent {
  class = input<string>('h-4 w-4');
}
