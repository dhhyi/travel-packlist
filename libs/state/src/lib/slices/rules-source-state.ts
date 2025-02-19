import {
  computed,
  inject,
  linkedSignal,
  resource,
  ResourceStatus,
} from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import { createLocalStorageSignalState } from '../persistence/storage-signal';

export type RulesSourceState = ReturnType<typeof rulesSourceState>;

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
  const remoteRulesResource = resource({
    request: () => remote(),
    loader: ({ request }) =>
      request
        ? CapacitorHttp.get({ url: request })
        : Promise.resolve(undefined),
  });
  const reloadRemote = function () {
    remoteRulesResource.reload();
  };
  const remoteStatus = linkedSignal(() => {
    const status = remoteRulesResource.status();
    const rules = remoteRulesResource.value()?.data as string | undefined;
    const httpStatus = remoteRulesResource.value()?.status;
    if (status === ResourceStatus.Idle) {
      return $localize`idle`;
    } else if (
      status === ResourceStatus.Loading ||
      status === ResourceStatus.Reloading
    ) {
      return $localize`loading`;
    } else if (status === ResourceStatus.Error) {
      return $localize`error`;
    } else if (status === ResourceStatus.Resolved) {
      if (httpStatus && httpStatus >= 200 && httpStatus < 300) {
        return rules ? $localize`loaded` : $localize`no content`;
      } else {
        return $localize`error`;
      }
    }
    return $localize`unknown`;
  });
  const loadRemote = function (url: string) {
    if (!url.startsWith('http')) {
      remoteStatus.set($localize`invalid url`);
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
      /** load remote rules */
      loadRemote,
      /** remote rules loading status */
      remoteStatus: remoteStatus.asReadonly(),
      /** reload remote rules */
      reloadRemote,
      /** remote rules history */
      remoteHistory: remoteHistory.asReadonly(),
      /** remove entry from history */
      removeFromHistory,
      /** storage: raw rules or default template */
      raw,
      /** storage: update raw rules */
      updateRules,
      /** derived: rules are not the default template */
      customized,
    },
  };
};
