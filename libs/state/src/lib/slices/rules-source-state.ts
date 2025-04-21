import {
  computed,
  effect,
  inject,
  InjectionToken,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { enhanceRemoteRulesURL } from '@travel-packlist/enhance-remote-url';
import {
  DEFAULT_RULES_TEMPLATE,
  EMPTY_RULES_TEMPLATE,
} from '@travel-packlist/rules-template';

import { createLocalStorageSignalState } from '../persistence/storage-signal';
import { ConfigState } from './config-state';

export type RulesSourceState = ReturnType<typeof rulesSourceState>;

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
    case 504:
      return $localize`Gateway Timeout`;
    default:
      return undefined;
  }
}

export const rulesSourceState = ({
  config: { rulesTemplate },
}: ConfigState) => {
  const mode = createLocalStorageSignalState<'local' | 'remote' | 'template'>(
    'rulesMode',
    'template',
  );

  const rawLocalRules = createLocalStorageSignalState<string | undefined>(
    'rules',
    undefined,
  );
  const localRulesAvailable = computed(() => rawLocalRules() !== undefined);

  const rulesHash = computed(() => {
    const raw = rawLocalRules();
    if (raw) {
      return cyrb53(raw).toString(16);
    }
    return undefined;
  });
  const lastHash = createLocalStorageSignalState<string | undefined>(
    'lastExportHash',
    undefined,
  );

  const lastDate = createLocalStorageSignalState<number | undefined>(
    'lastExportDate',
    undefined,
  );

  const markAsCurrent = () => {
    lastHash.set(rulesHash());
    lastDate.set(new Date().getTime());
  };

  const lastRulesAction = signal(new Date().getTime());
  effect(() => {
    rawLocalRules();
    lastRulesAction.set(new Date().getTime());
  });

  const defaultTemplate = inject(DEFAULT_RULES_TEMPLATE);
  const emptyTemplate = inject(EMPTY_RULES_TEMPLATE);

  const template = computed(() => {
    switch (rulesTemplate()) {
      case 'empty':
        return emptyTemplate;
      default:
        return defaultTemplate;
    }
  });

  const remoteHistory = createLocalStorageSignalState<string[]>(
    'remoteHistory',
    [],
  );
  const removeFromHistory = function (url: string) {
    remoteHistory.update((history) => history.filter((u) => u !== url));
  };
  const remote = linkedSignal(() =>
    mode() === 'remote' ? remoteHistory()[0] : undefined,
  );
  const requestMode =
    inject(CAPACITOR_HTTP_REQUEST_MODE, { optional: true }) ?? 'cors';

  const rawResource = resource({
    request: () => ({
      mode: mode(),
      rawLocal: rawLocalRules(),
      remote: remote(),
      template: template(),
    }),
    loader: ({ request }) => {
      switch (request.mode) {
        case 'local':
          return Promise.resolve(request.rawLocal);
        case 'template':
          return Promise.resolve(request.template);
        case 'remote':
          if (request.remote) {
            if (!request.remote.startsWith('http')) {
              throw new Error('Invalid URL');
            }
            const url = enhanceRemoteRulesURL(
              request.remote,
              requestMode === 'cors',
            );
            return CapacitorHttp.get({
              url,
              webFetchExtra: { mode: requestMode },
            }).then((response) => {
              if (response.status >= 200 && response.status < 300) {
                remoteHistory.update((history) => [
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  request.remote!,
                  ...history.filter((u) => u !== request.remote),
                ]);
                return response.data as string;
              } else {
                const message = [
                  [$localize`HTTP Error`, response.status.toString()].join(' '),
                  translateHttpStatus(response.status),
                ].join(': ');
                throw new Error(message);
              }
            });
          } else {
            return Promise.resolve(undefined);
          }
      }
    },
  });

  const loadRemote = function (url: string) {
    if (remote() !== url) {
      mode.set('remote');
      remote.set(url);
    }
  };

  const updateRules = function (newRules: string | undefined) {
    mode.set('local');
    rawLocalRules.set(newRules);
  };

  const copyFromCurrent = function () {
    rawLocalRules.set(rawResource.value());
    mode.set('local');
    markAsCurrent();
  };

  return {
    rules: {
      /** storage: local or remote */
      mode,
      /** storage: raw rules or default template */
      raw: rawResource.asReadonly(),
      /** derived: timestamp of last rules action */
      lastAction: lastRulesAction.asReadonly(),
      /** derived: hash of current rules */
      hash: rulesHash,
      /** derived: true if rules have changed since last export */
      exportNeeded: computed(
        () => mode() === 'local' && rulesHash() !== lastHash(),
      ),
      /** storage: mark current rules as exported/imported */
      markAsCurrent,
      /** storage: true if local rules are available */
      localRulesAvailable,
    },
    export: {
      /** storage: the date of the last export */
      lastDate: lastDate.asReadonly(),
    },
    localRules: {
      /** storage: update raw rules */
      updateRules,
      /** storage: copy current remote or template rules to local */
      copyFromCurrent,
    },
    remoteRules: {
      /** load remote rules */
      load: loadRemote,
      /** remote rules history */
      history: remoteHistory.asReadonly(),
      /** remove entry from history */
      removeFromHistory,
    },
  };
};

/*
  cspell:ignore cyrb bryc

    cyrb53 (c) 2018 bryc (github.com/bryc)
    License: Public domain (or MIT if needed). Attribution appreciated.
    A fast and simple 53-bit string hash function with decent collision resistance.
    Largely inspired by MurmurHash2/3, but with a focus on speed/simplicity.
*/
const cyrb53 = function (str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
