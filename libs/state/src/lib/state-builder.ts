import {
  inject,
  InjectionToken,
  Resource,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dispatch = (...args: any[]) => unknown;

type ResourceLike<T> = Pick<Resource<T>, 'value' | 'status' | 'error'>;

type Structured<T = Dispatch | Signal<unknown> | ResourceLike<unknown>> =
  Record<string, Record<string, T>>;

type OverwriteRedeclarations<
  A extends Record<string, unknown>,
  B extends Record<string, unknown>,
> = {
  [K in keyof A | keyof B]: K extends keyof B
    ? B[K]
    : K extends keyof A
      ? A[K]
      : never;
};

/**
 * Merges two structured objects into one.
 * It combines the first level categories and overwrites
 * the second level objects if needed.
 */
type CombinedStructured<A extends Structured, B extends Structured> = {
  [Category in keyof B | keyof A]: Category extends keyof B & keyof A
    ? OverwriteRedeclarations<A[Category], B[Category]>
    : Category extends keyof B
      ? B[Category]
      : Category extends keyof A
        ? A[Category]
        : never;
};

type StateConstructor<S extends Structured, T extends Structured> = (
  state: S,
) => T;

function merge<A extends Structured, B extends Structured>(
  a: A,
  b: B,
): CombinedStructured<A, B> {
  return Object.entries(a)
    .concat(Object.entries(b))
    .reduce<Structured>((acc, [category, dict]) => {
      acc[category] = { ...acc[category], ...dict };
      return acc;
    }, {}) as CombinedStructured<A, B>;
}

export const RESET_SIGNAL = new InjectionToken<WritableSignal<boolean>>(
  'RESET_SIGNAL',
  {
    providedIn: 'root',
    factory: () => signal(false),
  },
);

export class StateBuilder<T extends Structured> {
  private triggerReset = inject(RESET_SIGNAL);
  private constructor(private state: T) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static builder(): StateBuilder<{}> {
    return new StateBuilder({});
  }

  extend<S extends Structured>(
    ctr: StateConstructor<T, S>,
  ): StateBuilder<CombinedStructured<T, S>> {
    return new StateBuilder(merge(this.state, ctr(this.state)));
  }

  build(): T {
    return this.state;
  }

  async reset(): Promise<void> {
    this.triggerReset.set(Date.now() as unknown as boolean);
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}
