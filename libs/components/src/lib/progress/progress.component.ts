import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  animationFrameScheduler,
  combineLatest,
  concatMap,
  distinctUntilChanged,
  endWith,
  interval,
  map,
  of,
  pairwise,
  startWith,
  takeWhile,
  withLatestFrom,
} from 'rxjs';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
  imports: [AsyncPipe],
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
  readonly animationDuration = input<number>(0);

  readonly currentCount$ = combineLatest([
    toObservable(this.value).pipe(startWith(this.value()), pairwise()),
  ]).pipe(
    withLatestFrom(toObservable(this.animationDuration)),
    concatMap(([[[prev, count]], duration]) => {
      if (duration <= 0) {
        return of(count);
      }
      // inspired by https://dev.to/angular/building-count-up-animation-with-angular-and-rxjs-240k
      const startTime = animationFrameScheduler.now();
      return interval(0, animationFrameScheduler).pipe(
        map(() => animationFrameScheduler.now() - startTime),
        map((elapsedTime) => elapsedTime / duration),
        takeWhile((progress) => progress <= 1),
        map(easeOutQuad),
        map((progress) => prev + progress * (count - prev)),
        endWith(count),
        distinctUntilChanged(),
      );
    }),
  );
}
