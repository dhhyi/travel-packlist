import { inject, InjectionToken } from '@angular/core';

import { browserState } from './slices/browser-state';
import { clipboardState } from './slices/clipboard-state';
import { configState } from './slices/config-state';
import { packlistState } from './slices/packlist-state';
import { routerState } from './slices/router-state';
import { ruleParsing } from './slices/rule-parsing';
import { serviceWorkerState } from './slices/service-worker-state';
import { StateBuilder } from './state-builder';

type GlobalState = ReturnType<ReturnType<typeof buildState>['build']>;

function buildState() {
  return StateBuilder.builder()
    .extend(routerState)
    .extend(clipboardState)
    .extend(serviceWorkerState)
    .extend(configState)
    .extend(browserState)
    .extend(ruleParsing)
    .extend(packlistState);
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
  factory: () => inject(STATE_BUILDER).build(),
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
