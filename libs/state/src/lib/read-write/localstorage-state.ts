import {
  computed,
  effect,
  inject,
  linkedSignal,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { VariableType } from '@travel-packlist/model';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { loadState, saveState } from './storage-util';

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const initialState = {
  rules: undefined as string | undefined,
  answers: {} as Record<string, VariableType>,
  checkedItems: [] as string[],
  collapsedCategories: [] as string[],
  categorySorting: 'alphabetically' as 'alphabetically' | 'definition',
  trackWeight: false,
  answersLocked: false,
  fadeOutDisabledRules: false,
  highlightVariableStatus: false,
  refactorVariables: true,
  theme: 'system' as 'system' | 'light' | 'dark',
  fontSize: 'normal' as 'small' | 'normal' | 'large',
  animations: true,
  accessibility: 'accessible' as 'accessible' | 'compact',
  language: 'auto' as 'auto' | SupportedLanguage,
  exportReminder: false,
  lastExportHash: '',
  lastExportDate: 0,
};

type State = typeof initialState;

export type Themes = State['theme'];
export type FontSizes = State['fontSize'];

const state = loadState(localStorage, initialState);

function persist() {
  saveState(localStorage, state, initialState);
}

const createSignal = function <K extends keyof State>(
  this: { triggerReset: Signal<boolean> },
  key: K,
) {
  const newSignal = signal(state[key]);
  effect(
    () => {
      const newValue = newSignal();
      if (newValue !== state[key]) {
        (state[key] as unknown) = newValue;
        persist();
      }
    },
    { manualCleanup: true },
  );
  effect(() => {
    if (this.triggerReset()) {
      newSignal.set(initialState[key]);
    }
  });
  return newSignal;
};

export type LocalStorageState = ReturnType<typeof localStorageState>;

export const localStorageState = (triggerReset: Signal<boolean>) => {
  const create = createSignal.bind({ triggerReset }) as <K extends keyof State>(
    key: K,
  ) => WritableSignal<State[K]>;
  const template = inject(RULES_TEMPLATE);
  const rawRules = create('rules');
  const raw = linkedSignal(() => rawRules() ?? template);
  effect(() => {
    const newRules = raw();
    rawRules.set(newRules === template ? undefined : newRules);
  });

  const answers = create('answers');
  const checkedItems = create('checkedItems');
  const collapsedCategories = create('collapsedCategories');
  const answersLocked = create('answersLocked');
  return {
    rules: {
      /** storage: raw rules or default template */
      raw,
      /** derived: rules are not the default template */
      customized: computed(() => !!rawRules()),
    },
    packlist: {
      /** storage: the answers from checked questions in the packlist */
      answers,
      /** storage: the checked items in the packlist */
      checkedItems,
      /** storage: the categories that are collapsed in the packlist */
      collapsedCategories,
      /** storage: whether to lock the answers in the packlist */
      answersLocked,
      /** reset the packlist sub state */
      reset: () => {
        answers.set(initialState.answers);
        checkedItems.set(initialState.checkedItems);
        collapsedCategories.set(initialState.collapsedCategories);
        answersLocked.set(initialState.answersLocked);
      },
    },
    config: {
      /** storage: how to sort categories in the packlist */
      categorySorting: create('categorySorting'),
      /** storage: whether to track weight of items in the packlist */
      trackWeight: create('trackWeight'),
      /** storage: whether to fade out disabled rules in the editor */
      fadeOutDisabledRules: create('fadeOutDisabledRules'),
      /** storage: whether to highlight the status of variables in the editor */
      highlightVariableStatus: create('highlightVariableStatus'),
      /** storage: whether to rename all variables when renaming one in editor */
      refactorVariables: create('refactorVariables'),
      /** storage: the theme of the app */
      theme: create('theme'),
      /** storage: the font size of the app */
      fontSize: create('fontSize'),
      /** storage: the accessibility mode of the app */
      accessibility: create('accessibility'),
      /** storage: animations enabled */
      animations: create('animations'),
      /** storage: the language of the app */
      language: create('language'),
      /** storage: whether to remind the user to export the rules */
      exportReminder: create('exportReminder'),
    },
    export: {
      /** storage: the hash of the last exported rules */
      lastHash: create('lastExportHash'),
      /** storage: the date of the last export */
      lastDate: create('lastExportDate'),
    },
  };
};
