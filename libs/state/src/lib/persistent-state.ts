import {
  effect,
  inject,
  Injectable,
  Injector,
  signal,
  WritableSignal,
} from '@angular/core';
import { VariableType } from '@travel-packlist/model';

import { loadState, saveState } from './storage-util';
import { ReadWriteState } from './types';

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const initialState = {
  // packlist
  answers: {} as Record<string, VariableType>,
  checkedItems: [] as string[],
  collapsedCategories: [] as string[],
  // rules
  rules: undefined as string | undefined,
  // config
  fadeOutDisabledRules: false,
  highlightVariableStatus: false,
  refactorVariables: true,
  categorySorting: 'alphabetically' as 'alphabetically' | 'definition',
  trackWeight: false,
  answersLocked: false,
  theme: 'system' as 'system' | 'light' | 'dark',
  fontSize: 'normal' as 'small' | 'normal' | 'large',
  language: 'auto' as 'auto' | SupportedLanguage,
  exportReminder: false,
  lastExportHash: '',
  lastExportDate: 0,
};

export type PersistentStateType = typeof initialState;
type Keys = keyof PersistentStateType;
const persistentStateKeys = Object.keys(initialState) as Keys[];

@Injectable({ providedIn: 'root' })
export class PersistentState implements ReadWriteState<PersistentStateType> {
  private state = loadState(localStorage, initialState);
  private injector = inject(Injector);

  private signalMap = new Map<
    Keys,
    WritableSignal<PersistentStateType[Keys]>
  >();

  constructor() {
    this.loadLegacyState();
    this.initializeSignals();
  }

  private initializeSignals() {
    for (const key of persistentStateKeys) {
      const newSignal = signal(this.state[key]);
      effect(
        () => {
          const newValue = newSignal();
          if (newValue !== this.state[key]) {
            (this.state[key] as unknown) = newValue;
            this.persist();
          }
        },
        { manualCleanup: true, injector: this.injector },
      );
      this.signalMap.set(key, newSignal);
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
      ) as PersistentStateType['answers'];
      localStorage.removeItem('answers');
    }
    if (localStorage.getItem('checkedItems')) {
      this.state.checkedItems = JSON.parse(
        localStorage.getItem('checkedItems')!,
      ) as PersistentStateType['checkedItems'];
      localStorage.removeItem('checkedItems');
    }
    if (localStorage.getItem('collapsedCategories')) {
      this.state.collapsedCategories = JSON.parse(
        localStorage.getItem('collapsedCategories')!,
      ) as PersistentStateType['collapsedCategories'];
      localStorage.removeItem('collapsedCategories');
    }
    if (localStorage.getItem('rules')) {
      this.state.rules = localStorage.getItem('rules')!;
      localStorage.removeItem('rules');
    }
    if (localStorage.getItem('config')) {
      const config = JSON.parse(
        localStorage.getItem('config')!,
      ) as PersistentStateType;
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
    saveState(localStorage, this.state, initialState);
  }

  handles(key: string): key is Keys {
    return persistentStateKeys.includes(key as Keys);
  }

  signal<K extends Keys>(key: K): WritableSignal<PersistentStateType[K]> {
    return this.signalMap.get(key) as WritableSignal<PersistentStateType[K]>;
  }

  set<K extends Keys>(key: K, value: PersistentStateType[K]) {
    this.signal(key).set(value);
  }

  get<K extends Keys>(key: K): PersistentStateType[K] {
    return this.signal(key)();
  }

  reset() {
    this.state = { ...initialState };
    this.persist();
    persistentStateKeys.forEach((key) => {
      this.signal(key).set(initialState[key]);
    });
  }
}
