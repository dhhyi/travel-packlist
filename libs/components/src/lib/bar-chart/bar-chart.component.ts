import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { colorFromString } from '../colors';

@Component({
  selector: 'cmp-bar-chart',
  templateUrl: './bar-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      @apply flex flex-col items-center justify-center;
    }
  `,
})
export class BarChartComponent {
  readonly padding = 10;
  readonly height = 10;
  readonly barPadding = 2;

  readonly bars = input.required<{ name: string; value: number }[]>();
  readonly chartClass = input<string>('');

  color(name: string) {
    return colorFromString(name);
  }
}
