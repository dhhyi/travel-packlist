import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';

export const rulesValid: CanActivateFn = () => {
  const state = inject(GLOBAL_STATE);
  const router = inject(Router);

  const error = state.rules.parserError();
  if (error) {
    const targetUrl = router.getCurrentNavigation()?.finalUrl;
    return router.navigate(['/rules-error'], {
      queryParams: { error },
      browserUrl: targetUrl,
    });
  } else {
    return true;
  }
};
