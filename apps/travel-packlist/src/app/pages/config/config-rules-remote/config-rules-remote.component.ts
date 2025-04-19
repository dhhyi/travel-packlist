import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  ResourceStatus,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  IconCloseComponent,
  IconDeleteComponent,
  IconHelpComponent,
  IconHistoryComponent,
  IconRefreshComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { debounceTime } from 'rxjs';

import { confirm } from '../../../dialog';
import { extractErrorMessage } from '../../../util/extract-error-message';

@Component({
  selector: 'app-config-rules-remote',
  templateUrl: './config-rules-remote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: '../config-section.css',
  imports: [
    ReactiveFormsModule,
    IconHistoryComponent,
    IconRefreshComponent,
    IconCloseComponent,
    IconDeleteComponent,
    IconHelpComponent,
  ],
})
export class ConfigRulesRemoteComponent {
  private state = inject(GLOBAL_STATE);

  goToDocumentation() {
    this.state.router.go('remote-rules-documentation');
  }

  private readonly currentURL = computed(
    () => this.state.remoteRules.history()[0],
  );

  readonly rulesLoaded = computed(() => this.state.rules.raw.hasValue());

  readonly stateColor = computed(() =>
    this.state.rules.raw.status() === ResourceStatus.Idle ||
    !this.controlValue()
      ? 'text-gray-500'
      : this.state.rules.isLoading()
        ? 'text-yellow-normal'
        : this.state.rules.hasError()
          ? 'text-red'
          : 'text-green',
  );

  readonly i18nStatus = computed(() => {
    if (
      this.state.rules.raw.status() === ResourceStatus.Idle ||
      !this.controlValue()
    ) {
      return $localize`idle`;
    }
    switch (this.state.rules.raw.status()) {
      case ResourceStatus.Loading:
      case ResourceStatus.Reloading:
        return $localize`loading`;
      case ResourceStatus.Resolved:
        if (this.state.rules.parsed.status() === ResourceStatus.Error) {
          return $localize`parser error`;
        }
        return $localize`loaded`;
      case ResourceStatus.Error:
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

  control = new FormControl(this.currentURL(), {
    updateOn: 'blur',
  });

  private readonly controlValue = toSignal(
    this.control.valueChanges.pipe(debounceTime(500)),
  );

  constructor() {
    effect(() => {
      const newUrl = this.controlValue();
      if (newUrl) {
        this.state.remoteRules.load(newUrl);
      }
    });
  }

  clearRemote() {
    this.control.setValue('');
  }

  reloadRemote() {
    this.state.rules.raw.reload();
  }

  loadRemote(url: string) {
    this.control.setValue(url);
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
