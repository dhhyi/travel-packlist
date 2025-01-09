import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';

export const rulesValid: CanActivateFn = () => {
  const state = inject(GLOBAL_STATE);
  const router = inject(Router);

  const error = state.rules.parserError();
  if (error) {
    return router.createUrlTree(['/rules-error'], {
      queryParams: { error },
    });
  } else {
    return true;
  }
};
