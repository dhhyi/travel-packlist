import { computed, effect, inject, linkedSignal } from '@angular/core';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { createLocalStorageSignalState } from '../persistence/storage-signal';

export type RulesSourceState = ReturnType<typeof rulesSourceState>;

export const rulesSourceState = () => {
  const template = inject(RULES_TEMPLATE);
  const rawRules = createLocalStorageSignalState<string | undefined>(
    'rules',
    undefined,
  );
  const raw = linkedSignal(() => rawRules() ?? template);
  effect(() => {
    const newRules = raw();
    rawRules.set(newRules === template ? undefined : newRules);
  });
  const customized = computed(() => !!rawRules());

  return {
    rules: {
      /** storage: raw rules or default template */
      raw,
      /** derived: rules are not the default template */
      customized,
    },
  };
};
