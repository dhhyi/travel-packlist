import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'cmp-bar-chart',
  templateUrl: './bar-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col items-center justify-center',
  },
})
export class BarChartComponent<
  Item extends { name: string; value: number; color: string },
> {
  readonly padding = 10;
  readonly barHeight = 10;
  readonly barPadding = 2;

  readonly bars = input.required<Item[]>();
  readonly chartClass = input<string>('');

  readonly clicked = output<Item>();
}
