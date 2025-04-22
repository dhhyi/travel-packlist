import {
  animate,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { BarChartComponent } from '@travel-packlist/components';
import {
  IconArrowDownwardComponent,
  IconArrowUpwardComponent,
} from '@travel-packlist/icons';
import { serializeWeight } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { colorFromString } from '../../../../util/colors';

const paging = animation([
  query(':enter', style({ transform: 'translateY({{ from }})', height: '0' })),
  group([
    query(
      ':leave',
      animate(
        '300ms',
        style({ transform: 'translateY({{ to }})', height: '0' }),
      ),
    ),
    query(
      ':enter',
      animate('300ms', style({ transform: 'translateY(0)', height: '*' })),
    ),
  ]),
]);

const animatePages = trigger('animatePages', [
  transition(':increment', [
    useAnimation(paging, {
      params: { from: '150%', to: '-150%' },
    }),
  ]),
  transition(':decrement', [
    useAnimation(paging, {
      params: { from: '-150%', to: '150%' },
    }),
  ]),
]);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-heaviest-items',
  templateUrl: './heaviest-items.component.html',
  imports: [
    BarChartComponent,
    IconArrowDownwardComponent,
    IconArrowUpwardComponent,
  ],
  styles: `
    :host {
      @apply flex w-full max-w-[350px] flex-row gap-1;
    }
  `,
  animations: [animatePages],
})
export class HeaviestItemsComponent {
  private readonly pageSize = 10;

  private state = inject(GLOBAL_STATE);

  readonly heaviestItems = computed(() =>
    this.state.packlist
      .model()
      .flatMap((category) => category.items)
      .filter((i) => i.weight && !i.skipped && i.weight > 0)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .toSorted((l, r) => r.weight! - l.weight!)
      .reduce<{
        max: number;
        items: { name: string; value: number; color: string }[];
      }>(
        (acc, i) => {
          const max = (acc.max || i.weight) ?? 0;
          const name = `${i.name} (${serializeWeight(i.weight)})`;
          const item = {
            name,
            value: (i.weight ?? 0) / max,
            color: colorFromString(name),
          };
          return { max, items: [...acc.items, item] };
        },
        { max: NaN, items: [] },
      )
      .items.reduce<{ name: string; value: number; color: string }[][]>(
        (acc, item, index) => {
          const page = Math.floor(index / this.pageSize);
          acc[page] = [...(acc[page] || []), item];
          return acc;
        },
        [],
      ),
  );

  readonly currentPage = signal(0);

  readonly lastPage = computed(() => this.heaviestItems().length - 1);

  previousPage() {
    this.currentPage.update((page) => Math.max(0, page - 1));
  }

  nextPage() {
    this.currentPage.update((page) => Math.min(this.lastPage(), page + 1));
  }
}
