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
  IconDeleteComponent,
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
    IconDeleteComponent,
  ],
})
export class ConfigRulesRemoteComponent {
  private state = inject(GLOBAL_STATE);

  remoteStatus = this.state.rules.remoteStatus;
  private readonly currentURL = computed(
    () => this.state.rules.remoteHistory()[0],
  );

  readonly remoteHistory = computed(() =>
    this.state.rules.remoteHistory().slice(1),
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
        this.state.rules.loadRemote(newUrl);
      }
    });
  }

  reloadRemote() {
    this.state.rules.reloadRemote();
  }

  loadRemote(url: string) {
    this.control.setValue(url);
    this.remoteHistoryVisible.set(false);
  }

  removeFromHistory(url: string) {
    this.state.rules.removeFromHistory(url);
  }

  async copyRulesLocally() {
    if (
      await confirm(
        $localize`Copying rules locally will replace the previous local rules. Do you really want to continue?`,
      )
    ) {
      this.state.rules.updateRules(this.state.rules.raw());
      this.state.rules.mode.set('local');
    }
  }
}
