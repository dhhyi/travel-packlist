import { computed, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../dialog';

let guardAlreadyPassed = false;

export const rulesContainNoComments: CanActivateFn = async () => {
  const rules = inject(GLOBAL_STATE).rules.raw();
  const rulesContainComments = computed(() => rules?.includes('#'));
  if (!guardAlreadyPassed && rulesContainComments()) {
    const confirmed = await confirm(
      $localize`The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?`,
    );
    if (confirmed) {
      guardAlreadyPassed = true;
    }
    return confirmed;
  }
  return true;
};
