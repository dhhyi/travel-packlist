import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { GlobalState } from '../state/global-state';

export const rulesValid: CanActivateFn = () => {
  const state = inject(GlobalState);
  const router = inject(Router);

  const error = state.get('ruleParserError');
  if (error) {
    return router.createUrlTree(['/rules-error'], {
      queryParams: { error },
    });
  } else {
    return true;
  }
};
