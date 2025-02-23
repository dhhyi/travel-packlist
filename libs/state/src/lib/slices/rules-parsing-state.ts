import { computed, effect, inject, signal } from '@angular/core';
import { Parser } from '@travel-packlist/model';

import { createLocalStorageSignalState } from '../persistence/storage-signal';
import { RulesSourceState } from './rules-source-state';

export const rulesParsingState = ({
  rules: { raw, customized, mode },
}: RulesSourceState) => {
  const parser = inject(Parser);
  const ruleParsing = computed(() => {
    try {
      const parsedRules = parser.parseRules(raw());
      return { parsedRules, ruleParserError: '' };
    } catch (error) {
      console.error(error);
      const errorText =
        error instanceof Error ? error.message : 'An unknown error occurred';
      return {
        parsedRules: [],
        ruleParserError: errorText,
      };
    }
  });

  const lastRulesAction = signal(new Date().getTime());
  effect(() => {
    raw();
    lastRulesAction.set(new Date().getTime());
  });

  const rulesHash = computed(() => cyrb53(raw()).toString(16));
  const lastHash = createLocalStorageSignalState('lastExportHash', '');

  const lastDate = createLocalStorageSignalState('lastExportDate', 0);

  const markAsCurrent = () => {
    lastHash.set(rulesHash());
    lastDate.set(new Date().getTime());
  };

  return {
    rules: {
      /** derived: parsed rules (check ruleParserError for errors) */
      parsed: computed(() => ruleParsing().parsedRules),
      /** derived: error message if parsing failed */
      parserError: computed(() => ruleParsing().ruleParserError),
      /** derived: timestamp of last rules action */
      lastAction: lastRulesAction.asReadonly(),
      /** derived: hash of current rules */
      hash: rulesHash,
      /** derived: true if rules have changed since last export */
      exportNeeded: computed(
        () => mode() === 'local' && customized() && rulesHash() !== lastHash(),
      ),
      /** storage: mark current rules as exported/imported */
      markAsCurrent,
    },
    export: {
      /** storage: the date of the last export */
      lastDate: lastDate.asReadonly(),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;

/*
  cspell:ignore cyrb bryc

    cyrb53 (c) 2018 bryc (github.com/bryc)
    License: Public domain (or MIT if needed). Attribution appreciated.
    A fast and simple 53-bit string hash function with decent collision resistance.
    Largely inspired by MurmurHash2/3, but with a focus on speed/simplicity.
*/
const cyrb53 = function (str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
