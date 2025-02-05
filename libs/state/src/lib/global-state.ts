import { inject, InjectionToken } from '@angular/core';

import { localStorageState } from './read-write/localstorage-state';
import { browserState } from './readonly/browser-state';
import { elevateCheckedItems } from './readonly/elevate-checked-items';
import { ruleAnalysis } from './readonly/rule-analysis';
import { ruleParsing } from './readonly/rule-parsing';
import { clipboardState } from './slices/clipboard-state';
import { routerState } from './slices/router-state';
import { serviceWorkerState } from './slices/service-worker-state';
import { StateBuilder } from './state-builder';

type GlobalState = ReturnType<ReturnType<typeof buildState>['build']>;

function buildState() {
  return StateBuilder.builder()
    .extend(localStorageState)
    .extend(routerState)
    .extend(clipboardState)
    .extend(serviceWorkerState)
    .extend(browserState)
    .extend(ruleParsing)
    .extend(ruleAnalysis)
    .extend(elevateCheckedItems);
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

export const RESET_SWITCH = new InjectionToken<() => Promise<void>>(
  'RESET_SWITCH',
  {
    providedIn: 'root',
    factory: () => {
      const state = inject(STATE_BUILDER);
      return async () => {
        await state.reset();
      };
    },
  },
);
