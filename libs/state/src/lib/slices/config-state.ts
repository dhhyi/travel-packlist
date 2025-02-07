import { createLocalStorageSignalState } from '../persistence/storage-signal';

const create = createLocalStorageSignalState;

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
export type Themes = 'system' | 'light' | 'dark';
export type FontSizes = 'small' | 'normal' | 'large';

export type ConfigState = ReturnType<typeof configState>;

export const configState = () => ({
  config: {
    /** storage: how to sort categories in the packlist */
    categorySorting: create<'alphabetically' | 'definition'>(
      'categorySorting',
      'alphabetically',
    ),
    /** storage: whether to track weight of items in the packlist */
    trackWeight: create('trackWeight', false),
    /** storage: whether to allow skipping items in the packlist */
    skipItems: create('skipItems', false),
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
});
