import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { confirm } from '../dialog';
import { GlobalState } from '../state/global-state';

let guardAlreadyPassed = false;

export const rulesContainNoComments: CanActivateFn = async () => {
  const rulesContainComments = inject(GlobalState).get('rulesContainComments');
  if (rulesContainComments && !guardAlreadyPassed) {
    const confirmed = await confirm(
      $localize`:@@config.rules.edit.discard-comments:The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?` as string,
    );
    if (confirmed) {
      guardAlreadyPassed = true;
    }
    return confirmed;
  }
  return true;
};
