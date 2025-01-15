import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  host: {
    role: 'progressbar',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'value()',
  },
})
export class ProgressComponent {
  readonly value = input(0);
  readonly max = input.required<number>();
}
