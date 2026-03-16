import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { debounce, form, FormField } from '@angular/forms/signals';
import {
  IconCloseComponent,
  IconDeleteComponent,
  IconHelpComponent,
  IconHistoryComponent,
  IconRefreshComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { noop } from 'rxjs';

import { confirm } from '../../../dialog';
import { extractErrorMessage } from '../../../util/extract-error-message';

@Component({
  selector: 'app-config-rules-remote',
  imports: [
    IconHistoryComponent,
    IconRefreshComponent,
    IconCloseComponent,
    IconDeleteComponent,
    IconHelpComponent,
    FormField,
  ],
  templateUrl: './config-rules-remote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesRemoteComponent {
  private state = inject(GLOBAL_STATE);

  goToDocumentation() {
    this.state.router.go('remote-rules-documentation');
  }

  readonly rulesLoaded = computed(() => this.state.rules.raw.hasValue());

  readonly stateColor = computed(() =>
    this.state.rules.raw.status() === 'idle' || !this.control().value()
      ? 'text-gray-500'
      : this.state.rules.isLoading()
        ? 'text-yellow-normal'
        : this.state.rules.hasError()
          ? 'text-red'
          : 'text-green',
  );

  readonly i18nStatus = computed(() => {
    if (this.state.rules.raw.status() === 'idle' || !this.control().value()) {
      return $localize`idle`;
    }
    switch (this.state.rules.raw.status()) {
      case 'loading':
      case 'reloading':
        return $localize`loading`;
      case 'resolved':
        if (this.state.rules.parsed.status() === 'error') {
          return $localize`parser error`;
        }
        return $localize`loaded`;
      case 'error':
        return extractErrorMessage(this.state.rules.raw.error());
      default:
        return $localize`unknown`;
    }
  });

  readonly remoteHistory = computed(() =>
    this.state.rules.hasError()
      ? this.state.remoteRules.history()
      : this.state.remoteRules.history().slice(1),
  );
  readonly remoteHistoryVisible = signal(false);

  private readonly formModel = linkedSignal(
    () => this.state.remoteRules.history()[0]?.url || '',
  );

  control = form(this.formModel, (path) => {
    // TODO: replace with validate on blur once API is available
    debounce(path, () => new Promise<void>(noop));
  });
  readonly noRemoteValue = computed(() => !this.control().value());

  constructor() {
    effect(() => {
      const newUrl = this.control().value().trim();
      if (newUrl) {
        this.state.remoteRules.load(newUrl);
      }
    });
  }

  clearRemote() {
    this.control().value.set('');
  }

  reloadRemote() {
    this.state.rules.reload();
  }

  loadRemote(url: string) {
    this.control().value.set(url);
    this.remoteHistoryVisible.set(false);
  }

  removeFromHistory(url: string) {
    this.state.remoteRules.removeFromHistory(url);
  }

  async copyRulesLocally() {
    if (
      !this.state.rules.localRulesAvailable() ||
      (await confirm(
        $localize`Copying rules locally will replace the previous local rules. Do you really want to continue?`,
      ))
    ) {
      this.state.localRules.copyFromCurrent();
    }
  }
}
