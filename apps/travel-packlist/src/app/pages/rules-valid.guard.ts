import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';

export const rulesValid: CanActivateFn = () => {
  const state = inject(GLOBAL_STATE);

  if (state.rules.hasError()) {
    const router = inject(Router);
    const targetUrl = router.getCurrentNavigation()?.finalUrl;
    return router.navigate(['/rules-error'], {
      browserUrl: targetUrl,
    });
  } else {
    return true;
  }
};
