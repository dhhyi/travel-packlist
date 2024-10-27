import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Parser } from '../model/parser';
import { RulesPersistence } from './rules/rules.persistence';

export const rulesValid: CanActivateFn = () => {
  const parser = inject(Parser);
  const rules = inject(RulesPersistence).getRules();

  try {
    parser.parseRules(rules);
    return true;
  } catch (error) {
    console.error(error);
    const router = inject(Router);
    const errorText =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return router.createUrlTree(['/rules-error'], {
      queryParams: { error: errorText },
    });
  }
};
