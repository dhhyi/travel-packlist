import { Observable } from 'rxjs';

/**
 * Takes two arrays and emits the steps of transitioning from the first
 * to the second, with a delay between each step.
 *
 * #1 a version of the previous array where all elements added in current are added
 * #2 the current array
 * #3 completes the observable
 */
export function stagger<T extends T[number][]>(
  previous: T,
  current: T,
  equals: (a: T[number], b: T[number]) => boolean,
  delay = 100,
): Observable<T> {
  const compare = (el: T[number]) => (b: T[number]) => equals(el, b);

  const removed = previous.filter((p) => !current.some(compare(p)));
  const combined: T[number][] = [];

  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < previous.length || rightIndex < current.length) {
    const left = previous[leftIndex];
    const right = current[rightIndex];
    if (left && right && equals(left, right)) {
      combined.push(right);
      leftIndex++;
      rightIndex++;
    } else if (left && removed.some(compare(left))) {
      combined.push(left);
      leftIndex++;
    } else if (right) {
      combined.push(right);
      rightIndex++;
    } else {
      leftIndex++;
    }
  }

  if (combined.length === current.length) {
    // No items were removed, so we can skip the intermediate step
    return new Observable<T>((subscriber) => {
      setTimeout(() => {
        subscriber.next(current);
        subscriber.complete();
      }, delay);
    });
  }

  const added = current.filter((c) => !previous.some(compare(c)));
  if (added.length === 0) {
    // No items were added, so we can skip the intermediate step
    return new Observable<T>((subscriber) => {
      setTimeout(() => {
        subscriber.next(current);
        subscriber.complete();
      }, delay);
    });
  }

  return new Observable<T>((subscriber) => {
    setTimeout(() => {
      subscriber.next(combined as T);
      setTimeout(() => {
        subscriber.next(current);
        subscriber.complete();
      }, delay);
    }, delay);
  });
}
