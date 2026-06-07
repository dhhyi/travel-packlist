import {
  computed,
  effect,
  inject,
  resourceFromSnapshots,
  ResourceSnapshot,
} from '@angular/core';
import { Parser } from '@travel-packlist/model';

import { ConfigState } from './config-state';
import { RulesSourceState } from './rules-source-state';

type Rules = ReturnType<Parser['parseRules']>;

export const rulesParsingState = ({
  config: { trackWeight },
  rules: { raw },
  remoteRules: { setCurrentTitleForHistory },
}: RulesSourceState & ConfigState) => {
  const parser = inject(Parser);

  let previousRules: Rules = [];
  const parsed = resourceFromSnapshots(
    computed<ResourceSnapshot<Rules>>(() => {
      trackWeight();
      if (
        raw.status() === 'resolved' &&
        raw.hasValue() &&
        typeof raw.value() === 'string'
      ) {
        try {
          const rules = parser.parseRules(raw.value());
          previousRules = rules;
          return {
            value: rules,
            status: 'resolved' as const,
            error: undefined,
          };
        } catch (error) {
          return {
            status: 'error' as const,
            value: previousRules,
            error: error as Error,
          };
        }
      } else if (raw.status() === 'error') {
        return {
          status: 'error' as const,
          value: previousRules,
          error: raw.error() ?? new Error('Unknown error while loading rules'),
        };
      } else if (raw.isLoading()) {
        return {
          status: 'loading' as const,
          value: previousRules,
        };
      } else {
        return {
          status: 'idle' as const,
          value: previousRules,
        };
      }
    }),
  );

  effect(() => {
    if (parsed.hasValue()) {
      const rules = parsed.value();
      setCurrentTitleForHistory(rules.title);
    }
  });

  return {
    rules: {
      /** derived: parsed rules */
      parsed,
      /** derived: rules source and parser error */
      hasError: computed(
        () => parsed.status() === 'error' || raw.status() === 'error',
      ),
      isLoading: computed(() => parsed.isLoading() || raw.isLoading()),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;
