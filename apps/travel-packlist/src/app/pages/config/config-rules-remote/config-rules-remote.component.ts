import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  IconCloseComponent,
  IconHistoryComponent,
  IconRefreshComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { debounceTime } from 'rxjs';

import { confirm } from '../../../dialog';

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
  ],
})
export class ConfigRulesRemoteComponent {
  private state = inject(GLOBAL_STATE);

  private readonly currentURL = computed(
    () => this.state.remoteRules.history()[0],
  );

  readonly remoteStatus = this.state.remoteRules.status;
  readonly stateColor = computed(() =>
    this.state.remoteRules.status().state === 'idle'
      ? 'text-gray-500'
      : this.state.remoteRules.status().state === 'loading'
        ? 'text-yellow-normal'
        : this.state.remoteRules.status().state === 'loaded'
          ? 'text-green'
          : 'text-red',
  );

  readonly remoteHistory = computed(() =>
    this.state.remoteRules.history().slice(1),
  );
  readonly remoteHistoryVisible = signal(false);

  control = new FormControl(this.currentURL(), {
    updateOn: 'blur',
  });

  private readonly controlValueChanges = toSignal(
    this.control.valueChanges.pipe(debounceTime(500)),
  );

  constructor() {
    effect(() => {
      const newUrl = this.controlValueChanges();
      if (newUrl) {
        this.state.remoteRules.load(newUrl);
      }
    });
  }

  clearRemote() {
    this.control.setValue('');
  }

  reloadRemote() {
    this.state.remoteRules.reload();
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
      !this.state.rules.customized() ||
      (await confirm(
        $localize`Copying rules locally will replace the previous local rules. Do you really want to continue?`,
      ))
    ) {
      this.state.localRules.updateRules(this.state.rules.raw());
      // switching to local rules has to be done after the update,
      // otherwise the previous rules will be used
      this.state.rules.mode.set('local');
      this.state.rules.markAsCurrent();
    }
  }
}
