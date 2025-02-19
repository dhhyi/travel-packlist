import {
  computed,
  inject,
  InjectionToken,
  linkedSignal,
  resource,
  ResourceStatus,
} from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { createLocalStorageSignalState } from '../persistence/storage-signal';

export type RulesSourceState = ReturnType<typeof rulesSourceState>;

type RemoteRulesState =
  | 'idle'
  | 'loading'
  | 'loaded'
  | 'no content'
  | 'error'
  | 'invalid url'
  | 'unknown';

export const CAPACITOR_HTTP_REQUEST_MODE = new InjectionToken<RequestMode>(
  'CAPACITOR_HTTP_REQUEST_MODE',
);

export const rulesSourceState = () => {
  const mode = createLocalStorageSignalState<'local' | 'remote'>(
    'rulesMode',
    'local',
  );

  const template = inject(RULES_TEMPLATE);
  const rawRules = createLocalStorageSignalState<string | undefined>(
    'rules',
    undefined,
  );

  const remoteHistory = createLocalStorageSignalState<string[]>(
    'remoteHistory',
    [],
  );
  const removeFromHistory = function (url: string) {
    remoteHistory.update((history) => history.filter((u) => u !== url));
  };
  const remote = computed(() =>
    mode() === 'remote' ? remoteHistory()[0] : undefined,
  );
  const requestMode =
    inject(CAPACITOR_HTTP_REQUEST_MODE, { optional: true }) ?? 'cors';
  const remoteRulesResource = resource({
    request: () => remote(),
    loader: ({ request }) =>
      request
        ? CapacitorHttp.get({
            url: request,
            webFetchExtra: { mode: requestMode },
          })
        : Promise.resolve(undefined),
  });
  const reloadRemote = function () {
    remoteRulesResource.reload();
  };
  const remoteStatus = linkedSignal<{ state: RemoteRulesState; i18n: string }>(
    () => {
      if (mode() !== 'remote') {
        return { state: 'idle', i18n: $localize`idle` };
      }
      const status = remoteRulesResource.status();
      const rules = remoteRulesResource.value()?.data as string | undefined;
      const httpStatus = remoteRulesResource.value()?.status;
      if (status === ResourceStatus.Idle) {
        return { state: 'idle', i18n: $localize`idle` };
      } else if (
        status === ResourceStatus.Loading ||
        status === ResourceStatus.Reloading
      ) {
        return { state: 'loading', i18n: $localize`loading` };
      } else if (status === ResourceStatus.Error) {
        return { state: 'error', i18n: $localize`error` };
      } else if (status === ResourceStatus.Resolved) {
        if (httpStatus && httpStatus >= 200 && httpStatus < 300) {
          return rules
            ? { state: 'loaded', i18n: $localize`loaded` }
            : { state: 'no content', i18n: $localize`no content` };
        } else {
          return { state: 'error', i18n: $localize`error` };
        }
      }
      return { state: 'unknown', i18n: $localize`unknown` };
    },
  );
  const loadRemote = function (url: string) {
    if (!url.startsWith('http')) {
      remoteStatus.set({ state: 'invalid url', i18n: $localize`invalid url` });
      return;
    }
    remoteHistory.update((history) => [
      url,
      ...history.filter((u) => u !== url),
    ]);
  };
  const remoteRules = computed(
    () => (remoteRulesResource.value()?.data as string) || undefined,
  );

  const raw = computed(() =>
    mode() === 'local' ? (rawRules() ?? template) : (remoteRules() ?? ''),
  );

  const updateRules = function (newRules: string) {
    rawRules.set(newRules === template ? undefined : newRules);
  };
  const customized = computed(() => !!rawRules());

  return {
    rules: {
      /** storage: local or remote */
      mode,
      /** storage: raw rules or default template */
      raw,
      /** derived: rules are not the default template */
      customized,
    },
    localRules: {
      /** storage: update raw rules */
      updateRules,
    },
    remoteRules: {
      /** load remote rules */
      load: loadRemote,
      /** remote rules loading status */
      status: remoteStatus.asReadonly(),
      /** reload remote rules */
      reload: reloadRemote,
      /** remote rules history */
      history: remoteHistory.asReadonly(),
      /** remove entry from history */
      removeFromHistory,
    },
  };
};
