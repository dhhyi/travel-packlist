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

function translateHttpStatus(status: number): string | undefined {
  switch (status) {
    case 400:
      return $localize`Bad Request`;
    case 401:
      return $localize`Unauthorized`;
    case 403:
      return $localize`Forbidden`;
    case 404:
      return $localize`Not Found`;
    case 500:
      return $localize`Internal Server Error`;
    default:
      return undefined;
  }
}

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
          }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
              return response.data as string;
            } else {
              const message = [
                [$localize`HTTP Error`, response.status.toString()].join(' '),
                translateHttpStatus(response.status),
              ].join(': ');
              throw new Error(message);
            }
          })
        : Promise.resolve(undefined),
  });
  const reloadRemote = function () {
    remoteRulesResource.reload();
  };
  const remoteStatus = linkedSignal<{
    state: RemoteRulesState;
    i18n: string;
    message?: unknown;
  }>(() => {
    if (mode() !== 'remote') {
      return { state: 'idle', i18n: $localize`idle` };
    }

    switch (remoteRulesResource.status()) {
      case ResourceStatus.Idle:
        return { state: 'idle', i18n: $localize`idle` };
      case ResourceStatus.Loading:
      case ResourceStatus.Reloading:
        return { state: 'loading', i18n: $localize`loading` };
      case ResourceStatus.Error:
        return {
          state: 'error',
          i18n: $localize`error`,
          message: remoteRulesResource.error(),
        };
      case ResourceStatus.Resolved:
        return remoteRulesResource.value()
          ? { state: 'loaded', i18n: $localize`loaded` }
          : { state: 'no content', i18n: $localize`no content` };
    }
    return { state: 'unknown', i18n: $localize`unknown` };
  });

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
  const remoteRules = computed(() => remoteRulesResource.value());

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
