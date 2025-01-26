// eslint-disable-next-line no-restricted-imports
import { computed, effect, Injector, signal } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StateBuilder } from './state-builder';

describe('state builder', () => {
  let injector: Injector;

  beforeEach(() => {
    injector = TestBed.inject(Injector);
  });

  it('should create an instance', () => {
    const builder = StateBuilder.builder();

    expect(builder).toBeTruthy();
    expect(builder.build()).toBeTruthy();
  });

  describe('extend', () => {
    it('should extend the state', fakeAsync(() => {
      const builder = StateBuilder.builder().extend((reset) => {
        const a = signal(1);
        effect(
          () => {
            // eslint-disable-next-line jest/no-conditional-in-test
            if (reset()) {
              a.set(0);
            }
          },
          { injector },
        );
        return {
          group: { a },
        };
      });

      const state = builder.build();

      expect(state.group.a).toBeTruthy();
      expect(state.group.a()).toBe(1);

      state.group.a.set(2);

      expect(state.group.a()).toBe(2);

      builder.reset();
      tick();

      expect(state.group.a()).toBe(0);
    }));
  });

  describe('derive', () => {
    it('should derive the state', fakeAsync(() => {
      const builder = StateBuilder.builder()
        .extend((reset) => {
          const a = signal(1);
          const b = signal(2);
          effect(
            () => {
              // eslint-disable-next-line jest/no-conditional-in-test
              if (reset()) {
                a.set(0);
                b.set(0);
              }
            },
            { injector },
          );
          return {
            group: { a, b },
          };
        })
        .derive((state) => {
          const c = computed(() => state.group.a() + state.group.b());
          return {
            group: { c },
          };
        })
        .derive((state) => {
          const d = computed(() => state.group.c() * state.group.a());
          return {
            group: { d },
          };
        });

      const state = builder.build();

      expect(state.group.c).toBeTruthy();
      expect(state.group.c()).toBe(3);
      expect(state.group.d()).toBe(3);

      state.group.a.set(2);

      expect(state.group.c()).toBe(4);
      expect(state.group.d()).toBe(8);

      state.group.b.set(3);

      expect(state.group.c()).toBe(5);
      expect(state.group.d()).toBe(10);

      builder.reset();
      tick();

      expect(state.group.c()).toBe(0);
      expect(state.group.d()).toBe(0);
    }));
  });
});
