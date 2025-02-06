import { computed, effect, inject, linkedSignal } from '@angular/core';
import { VariableType } from '@travel-packlist/model';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { createLocalSignalState } from '../persistence/local-storage-signal';

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export type Themes = 'system' | 'light' | 'dark';
export type FontSizes = 'small' | 'normal' | 'large';

export type LocalStorageState = ReturnType<typeof localStorageState>;

export const localStorageState = () => {
  const create = createLocalSignalState;
  const template = inject(RULES_TEMPLATE);
  const rawRules = create<string | undefined>('rules', undefined);
  const raw = linkedSignal(() => rawRules() ?? template);
  effect(() => {
    const newRules = raw();
    rawRules.set(newRules === template ? undefined : newRules);
  });

  const answers = create<Record<string, VariableType>>('answers', {});
  const checkedItems = create<string[]>('checkedItems', []);
  const collapsedCategories = create<string[]>('collapsedCategories', []);
  const answersLocked = create('answersLocked', false);
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
        answers.set({});
        checkedItems.set([]);
        collapsedCategories.set([]);
        answersLocked.set(false);
      },
    },
    config: {
      /** storage: how to sort categories in the packlist */
      categorySorting: create<'alphabetically' | 'definition'>(
        'categorySorting',
        'alphabetically',
      ),
      /** storage: whether to track weight of items in the packlist */
      trackWeight: create('trackWeight', false),
      /** storage: whether to fade out disabled rules in the editor */
      fadeOutDisabledRules: create('fadeOutDisabledRules', false),
      /** storage: whether to highlight the status of variables in the editor */
      highlightVariableStatus: create('highlightVariableStatus', false),
      /** storage: whether to rename all variables when renaming one in editor */
      refactorVariables: create('refactorVariables', true),
      /** storage: the theme of the app */
      theme: create<Themes>('theme', 'system'),
      /** storage: the font size of the app */
      fontSize: create<FontSizes>('fontSize', 'normal'),
      /** storage: the accessibility mode of the app */
      accessibility: create<'accessible' | 'compact'>(
        'accessibility',
        'accessible',
      ),
      /** storage: animations enabled */
      animations: create('animations', true),
      /** storage: the language of the app */
      language: create<'auto' | SupportedLanguage>('language', 'auto'),
      /** storage: whether to remind the user to export the rules */
      exportReminder: create('exportReminder', false),
    },
    export: {
      /** storage: the hash of the last exported rules */
      lastHash: create('lastExportHash', ''),
      /** storage: the date of the last export */
      lastDate: create('lastExportDate', 0),
    },
  };
};
