import {
  effect,
  inject,
  Injectable,
  Injector,
  signal,
  WritableSignal,
} from '@angular/core';
import { VariableType } from '../model/types';
import { rulesTemplate } from '../model/template';

const initialState = {
  // packlist
  answers: {} as Record<string, VariableType>,
  checkedItems: [] as string[],
  collapsedCategories: [] as string[],
  // rules
  rules: rulesTemplate,
  // config
  fadeOutDisabledRules: false,
  trackWeight: false,
  answersLocked: false,
  theme: 'system' as 'system' | 'light' | 'dark',
  language: 'en' as 'en' | 'de',
};

export type State = typeof initialState;

type Keys = keyof State;

@Injectable({ providedIn: 'root' })
export class AppState {
  private state: State = initialState;
  private injector = inject(Injector);

  private signalMap = new Map<Keys, WritableSignal<State[Keys]>>();

  constructor() {
    const loaded = localStorage.getItem('state') ?? '{}';
    this.state = JSON.parse(loaded) as State;
    this.state = { ...initialState, ...this.state };
    this.loadLegacyState();
    // initialize signals
    for (const key of Object.keys(initialState) as Keys[]) {
      this.signal(key);
    }
  }

  /**
   * Load legacy state from localStorage.
   * This is only necessary for users who have used the old version of the checklist.
   *
   * TODO: Remove this function after the next major release.
   */
  private loadLegacyState() {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    if (localStorage.getItem('answers')) {
      this.state.answers = JSON.parse(
        localStorage.getItem('answers')!,
      ) as State['answers'];
      localStorage.removeItem('answers');
    }
    if (localStorage.getItem('checkedItems')) {
      this.state.checkedItems = JSON.parse(
        localStorage.getItem('checkedItems')!,
      ) as State['checkedItems'];
      localStorage.removeItem('checkedItems');
    }
    if (localStorage.getItem('collapsedCategories')) {
      this.state.collapsedCategories = JSON.parse(
        localStorage.getItem('collapsedCategories')!,
      ) as State['collapsedCategories'];
      localStorage.removeItem('collapsedCategories');
    }
    if (localStorage.getItem('rules')) {
      this.state.rules = localStorage.getItem('rules')!;
      localStorage.removeItem('rules');
    }
    if (localStorage.getItem('config')) {
      const config = JSON.parse(localStorage.getItem('config')!) as State;
      this.state.fadeOutDisabledRules = config.fadeOutDisabledRules;
      this.state.trackWeight = config.trackWeight;
      this.state.answersLocked = config.answersLocked;
      this.state.theme = config.theme;
      this.state.language = config.language;
      localStorage.removeItem('config');
    }
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    this.persist();
  }

  private persist() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  signal<K extends Keys>(key: K): WritableSignal<State[K]> {
    if (!this.signalMap.has(key)) {
      const newSignal = signal(this.state[key]);
      effect(
        () => {
          const newValue = newSignal();
          if (newValue !== this.state[key]) {
            this.state[key] = newValue;
            this.persist();
          }
        },
        { manualCleanup: true, injector: this.injector },
      );
      this.signalMap.set(key, newSignal);
    }
    return this.signalMap.get(key) as WritableSignal<State[K]>;
  }

  set<K extends Keys>(key: K, value: State[K]) {
    this.signal(key).set(value);
  }

  get<K extends Keys>(key: K): State[K] {
    return this.signal(key)();
  }

  reset() {
    this.state = initialState;
    this.persist();
    this.signalMap.forEach((signal, key) => {
      signal.set(initialState[key]);
    });
  }

  resetChecklist() {
    this.set('answers', {});
    this.set('checkedItems', []);
    this.set('collapsedCategories', []);
    this.set('answersLocked', false);
  }
}
