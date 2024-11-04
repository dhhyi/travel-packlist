import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-download',
  standalone: true,
  imports: [],
  templateUrl: './icon-download.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDownloadComponent {
  class = input<string>('h-4 w-4');
}
