import { computed, inject, resource, ResourceStatus } from '@angular/core';
import { Parser } from '@travel-packlist/model';

import { ConfigState } from './config-state';
import { RulesSourceState } from './rules-source-state';

export const rulesParsingState = ({
  config: { trackWeight },
  rules: { raw },
}: RulesSourceState & ConfigState) => {
  const parser = inject(Parser);

  const parsed = resource({
    request: () => {
      trackWeight();
      return raw.value();
    },
    loader: ({ request }) =>
      Promise.resolve(request ? parser.parseRules(request) : []),
    defaultValue: [],
  });

  return {
    rules: {
      /** derived: parsed rules */
      parsed,
      /** derived: rules source and parser error */
      hasError: computed(
        () =>
          parsed.status() === ResourceStatus.Error ||
          raw.status() === ResourceStatus.Error,
      ),
      isLoading: computed(() => parsed.isLoading() || raw.isLoading()),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;
