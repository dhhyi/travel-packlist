import { PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [PercentPipe],
  host: {
    class: 'flex flex-col items-center justify-center',
  },
})
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export class PieChartComponent<
  Item extends { name: string; value: number; color: string },
> {
  readonly padding = 10;
  readonly segments = input.required<Item[]>();
  readonly chartClass = input<string>('');

  readonly clicked = output<Item>();

  readonly sortedSegments = computed(() => {
    if (this.segments().length === 1 && this.segments()[0].value === 1) {
      return this.segments().map((segment) => ({ ...segment, value: 0.999 }));
    }
    return this.segments().toSorted((a, b) => b.value - a.value);
  });

  readonly paths = computed(() => {
    const r = 50;
    const point = (percent: number) => {
      const x = Math.sin(2 * Math.PI * percent) * r + (this.padding + r);
      const y = -Math.cos(2 * Math.PI * percent) * r + (this.padding + r);
      return `${x} ${y}`;
    };
    return this.sortedSegments().reduce(
      ({ paths, start }, item) => {
        const end = start + item.value;
        const path = `
          M ${this.padding + r} ${this.padding + r}
          L ${point(start)}
          A ${r} ${r} 0 ${item.value > 0.5 ? 1 : 0} 1 ${point(end)}
          Z`;
        return {
          paths: [...paths, { path, ...item }],
          start: end,
        };
      },
      {
        paths: [] as ({ path: string } & Item)[],
        start: 0,
      },
    ).paths;
  });
}
