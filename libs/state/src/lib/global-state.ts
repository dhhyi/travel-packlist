import { inject, InjectionToken } from '@angular/core';

import { localStorageState } from './read-write/localstorage-state';
import { routerState } from './read-write/router-state';
import { sessionState } from './read-write/session-state';
import { transientState } from './read-write/transient-state';
import { browserState } from './readonly/browser-state';
import { ruleAnalysis } from './readonly/rule-analysis';
import { ruleParsing } from './readonly/rule-parsing';
import { StateBuilder } from './state-builder';

type GlobalState = ReturnType<ReturnType<typeof buildState>['build']>;

function buildState() {
  return StateBuilder.builder()
    .extend(localStorageState)
    .extend(routerState)
    .extend(sessionState)
    .extend(transientState)
    .derive(browserState)
    .derive(ruleParsing)
    .derive(ruleAnalysis);
}

const STATE_BUILDER = new InjectionToken<ReturnType<typeof buildState>>(
  'STATE_BUILDER',
  {
    providedIn: 'root',
    factory: () => buildState(),
  },
);

export const GLOBAL_STATE = new InjectionToken<GlobalState>('GLOBAL_STATE', {
  providedIn: 'root',
  factory: () => {
    return inject(STATE_BUILDER).build();
  },
});

export const RESET_SWITCH = new InjectionToken<() => void>('RESET_SWITCH', {
  providedIn: 'root',
  factory: () => {
    const state = inject(STATE_BUILDER);
    return () => {
      state.reset();
    };
  },
});
