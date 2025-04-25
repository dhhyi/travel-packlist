import {
  computed,
  effect,
  inject,
  Resource,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { Parser } from '@travel-packlist/model';

import { ConfigState } from './config-state';
import { RulesSourceState } from './rules-source-state';

export const rulesParsingState = ({
  config: { trackWeight },
  rules: { raw },
}: RulesSourceState & ConfigState) => {
  const parser = inject(Parser);

  const parsedResource = resource({
    request: () => {
      trackWeight();
      return raw.value();
    },
    loader: ({ request }) =>
      Promise.resolve(request ? parser.parseRules(request) : []),
  });

  // debounce rule updates to switch from correctly parsed state
  // to the next without 'undefined' in between
  type InferResource<T> = T extends Resource<infer U> ? NonNullable<U> : never;
  const parsedRules = signal<InferResource<typeof parsedResource>>([]);
  effect(() => {
    const rules = parsedResource.value();
    if (rules) {
      parsedRules.set(rules);
    }
  });

  return {
    rules: {
      /** derived: parsed rules */
      parsed: {
        value: parsedRules.asReadonly(),
        status: parsedResource.status,
        error: parsedResource.error,
      },
      /** derived: rules source and parser error */
      hasError: computed(
        () =>
          parsedResource.status() === ResourceStatus.Error ||
          raw.status() === ResourceStatus.Error,
      ),
      isLoading: computed(() => parsedResource.isLoading() || raw.isLoading()),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;
