import { inject, computed, signal, effect } from '@angular/core';
import { Parser } from '@travel-packlist/model';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { LocalStorageState } from '../read-write/localstorage-state';

export const ruleParsing = ({
  rules: { raw },
  export: { lastHash },
}: LocalStorageState) => {
  const rulesTemplate = inject(RULES_TEMPLATE);
  const rulesOrTemplate = computed(() => raw() ?? rulesTemplate);

  const parser = inject(Parser);
  const ruleParsing = computed(() => {
    try {
      const parsedRules = parser.parseRules(rulesOrTemplate());
      return { parsedRules, ruleParserError: '' };
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
      } else {
        console.error(error);
      }
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
    rulesOrTemplate();
    lastRulesAction.set(new Date().getTime());
  });

  const rulesHash = computed(() => cyrb53(rulesOrTemplate()).toString(16));

  return {
    rules: {
      /** derived: rules() or rulesTemplate if no rules are defined */
      rulesOrTemplate,
      /** derived: parsed rules (check ruleParserError for errors) */
      parsed: computed(() => ruleParsing().parsedRules),
      /** derived: error message if parsing failed */
      parserError: computed(() => ruleParsing().ruleParserError),
      /** derived: timestamp of last rules action */
      lastAction: lastRulesAction,
      /** derived: hash of current rules */
      hash: rulesHash,
      /** derived: true if rules have changed since last export */
      exportNeeded: computed(() => {
        return !!raw() && rulesHash() !== lastHash();
      }),
    },
  };
};

export type RuleParsing = ReturnType<typeof ruleParsing>;

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
