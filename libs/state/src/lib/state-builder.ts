import { signal, Signal, WritableSignal } from '@angular/core';

type Structured<T = unknown> = Record<string, Record<string, T>>;

type PersistentStateConstructor<T extends Structured<WritableSignal<unknown>>> =
  (triggerReset: Signal<boolean>) => T;

type DerivedStateConstructor<
  S extends Structured<Signal<unknown>>,
  T extends Structured<Signal<unknown>>,
> = (state: S) => T;

function merge<A extends Structured, B extends Structured>(a: A, b: B): A & B {
  return Object.entries(a)
    .concat(Object.entries(b))
    .reduce<Structured>((acc, [category, dict]) => {
      acc[category] = { ...acc[category], ...dict };
      return acc;
    }, {}) as A & B;
}

export class StateBuilder<T extends Record<string, never>> {
  private constructor(
    private state: T,
    private triggerReset: WritableSignal<boolean>,
  ) {}

  static builder(): StateBuilder<Record<string, never>> {
    return new StateBuilder({}, signal(false));
  }

  extend<S extends Structured<WritableSignal<unknown>>>(
    ctr: PersistentStateConstructor<S>,
  ): StateBuilder<S & T> {
    const writableSignals = ctr(this.triggerReset);
    return new StateBuilder(
      merge(this.state, writableSignals),
      this.triggerReset,
    );
  }

  derive<S extends Structured<Signal<unknown>>>(
    ctr: DerivedStateConstructor<T, S>,
  ): StateBuilder<S & T> {
    return new StateBuilder(
      merge(this.state, ctr(this.state)),
      this.triggerReset,
    );
  }

  build(): T {
    return this.state;
  }

  reset(): void {
    this.triggerReset.set(Date.now() as unknown as boolean);
  }
}
