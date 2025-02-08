import { PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [PercentPipe],
  styles: `
    :host {
      @apply flex flex-col items-center justify-center;
    }
  `,
})
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export class PieChartComponent {
  readonly padding = 10;
  readonly segments = input.required<{ name: string; value: number }[]>();
  readonly chartClass = input<string>('');

  readonly sortedSegments = computed(() =>
    this.segments().toSorted((a, b) => b.value - a.value),
  );

  readonly paths = computed(() => {
    const r = 50;
    const point = (percent: number) => {
      const x = Math.sin(2 * Math.PI * percent) * r + (this.padding + r);
      const y = -Math.cos(2 * Math.PI * percent) * r + (this.padding + r);
      return `${x} ${y}`;
    };
    return this.sortedSegments().reduce(
      ({ paths, start }, segment) => {
        const end = start + segment.value;
        const path = `
          M ${this.padding + r} ${this.padding + r}
          L ${point(start)}
          A ${r} ${r} 0 ${segment.value > 0.5 ? 1 : 0} 1 ${point(end)}
          Z`;
        return { paths: [...paths, { name: segment.name, path }], start: end };
      },
      { paths: [] as { name: string; path: string }[], start: 0 },
    ).paths;
  });

  color(category: string): string {
    return `hsl(${(hashStringToNumber(category, 400) * 360) / 400}, 50%, 50%)`;
  }
}

function hashStringToNumber(str: string, max: number): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // Simple hash algorithm
    hash |= 0; // Convert to 32-bit integer
  }
  return (Math.abs(hash) % max) + 1;
}
