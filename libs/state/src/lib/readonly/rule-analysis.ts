import { inject, computed } from '@angular/core';
import { Refactor } from '@travel-packlist/model';

import { LocalStorageState } from '../read-write/localstorage-state';
import { RuleParsing } from './rule-parsing';

export const ruleAnalysis = ({
  rules: { parsed: parsedRules },
  packlist: { answers },
}: LocalStorageState & RuleParsing) => {
  const refactor = inject(Refactor);
  const active = computed(() =>
    refactor.filterActive({
      rules: parsedRules(),
      model: answers(),
    }),
  );
  const activeRules = computed(() => active().rules);
  return {
    rules: {
      /** derived: all categories extracted from parsed rules */
      categories: computed(() => refactor.extractCategories(parsedRules())),
      /** derived: all variables extracted from parsed rules */
      variables: computed(() => refactor.extractVariables(parsedRules())),
      /** derived: currently active rules */
    },
    active: {
      rules: activeRules,
      /** derived: currently active answers */
      answers: computed(() => active().model),
      /** derived: currently active questions */
      questions: computed(() =>
        activeRules().flatMap((rule) => rule.questions),
      ),
      /** derived: currently active items */
      items: computed(() => activeRules().flatMap((rule) => rule.items)),
    },
  };
};
