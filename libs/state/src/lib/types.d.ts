import { Signal, WritableSignal } from '@angular/core';

export interface ReadOnlyState<Blueprint extends object> {
  get<K extends keyof Blueprint>(key: K): Blueprint[K];

  signal<K extends keyof Blueprint>(key: K): Signal<Blueprint[K]>;

  handles(key: string): key is keyof Blueprint;
}

export interface ReadWriteState<Blueprint extends object>
  extends ReadOnlyState<Blueprint> {
  set<K extends keyof Blueprint>(key: K, value: Blueprint[K]): void;

  signal<K extends keyof Blueprint>(key: K): WritableSignal<Blueprint[K]>;

  reset(): void;
}
