import { DatePipe, NgClass } from '@angular/common';
import {
  Component,
  inject,
  ChangeDetectionStrategy,
  signal,
  effect,
  Signal,
  computed,
  ElementRef,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FlagGermanyComponent,
  FlagUkComponent,
  IconDownloadComponent,
  IconHelpComponent,
} from '@travel-packlist/icons';
import { GlobalState } from '@travel-packlist/state';

import { confirm } from '../../dialog';
import { ConfigFacade } from './config.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config',
  imports: [
    RouterModule,
    FormsModule,
    DatePipe,
    NgClass,
    FlagGermanyComponent,
    FlagUkComponent,
    IconDownloadComponent,
    IconHelpComponent,
  ],
  templateUrl: './config.component.html',
  styles: `
    .section {
      @apply mb-2 flex flex-col gap-2 border-b pb-2;
    }
  `,
})
export default class ConfigComponent {
  readonly loading = signal(false);

  displayKoFi = !ANDROID;
  displayServiceWorkerStatus = !ANDROID;
  displayVersionCode = ANDROID;

  buildTime = BUILD_TIME;
  version = VERSION;
  gitHash = GIT_HASH;
  versionCode = VERSION_CODE;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private state = inject(GlobalState);
  fadeOutDisabledRules = this.state.signal('fadeOutDisabledRules');
  highlightVariableStatus = this.state.signal('highlightVariableStatus');
  refactorVariables = this.state.signal('refactorVariables');
  trackWeight = this.state.signal('trackWeight');
  categorySorting = this.state.signal('categorySorting');
  exportReminder = this.state.signal('exportReminder');
  theme = this.state.signal('theme');
  language = this.state.signal('language');
  fontSize = this.state.signal('fontSize');

  readonly trackWeightHelp = signal(false);

  exportNeeded = this.state.signal('exportNeeded');
  private facade = inject(ConfigFacade);
  readonly highlightExport: Signal<boolean>;
  private readonly exportButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('exportButton');
  isExportAvailable = this.facade.isExportAvailable.bind(this.facade);
  readonly highlightImport: Signal<boolean>;
  private readonly importButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('importButton');

  readonly serviceWorkerStatus = computed((): string => {
    switch (this.state.signal('serviceWorkerStatus')()) {
      case 'disabled':
        return $localize`:@@config.service-worker.disabled:disabled` as string;
      case 'error':
        return $localize`:@@config.service-worker.error:error` as string;
      case 'unrecoverable':
        return $localize`:@@config.service-worker.unrecoverable:unrecoverable - please refresh` as string;
      case 'init':
        return $localize`:@@config.service-worker.init:initializing` as string;
      case 'ok':
        return $localize`:@@config.service-worker.ok:ok` as string;
      case 'update-available':
        return $localize`:@@config.service-worker.update-available:update available` as string;
    }
  });

  constructor() {
    const fragment = toSignal(this.route.fragment);
    this.highlightExport = computed(() => fragment() === 'export-now');
    this.highlightImport = computed(() => fragment() === 'import');
    effect(() => {
      const fragmentValue = fragment();
      if (fragmentValue === 'export-now') {
        const buttonVerticalPosition =
          this.exportButton().nativeElement.getBoundingClientRect().top;
        if (buttonVerticalPosition > window.innerHeight) {
          setTimeout(() => {
            this.exportButton().nativeElement.scrollIntoView({
              behavior: 'smooth',
            });
          }, 2000);
        }
      } else if (fragmentValue === 'import') {
        const buttonVerticalPosition =
          this.importButton().nativeElement.getBoundingClientRect().top;
        if (buttonVerticalPosition > window.innerHeight) {
          setTimeout(() => {
            this.importButton().nativeElement.scrollIntoView({
              behavior: 'smooth',
            });
          }, 2000);
        }
      }
    });
  }

  async resetChecklist() {
    if (
      await confirm(
        $localize`:@@config.checklist.reset.question:Are you sure you want to reset the checklist?` as string,
      )
    ) {
      this.facade.resetChecklist();
      await this.router.navigate(['/packlist']);
    }
  }

  async resetEverything() {
    if (
      await confirm(
        $localize`:@@config.dangerzone.reset.question:Are you sure you want to reset the whole application?` as string,
      )
    ) {
      this.state.reset();
      await this.router.navigate(['/packlist']);
    }
  }

  async importRules() {
    this.loading.set(true);
    if (await this.facade.importRules()) {
      await this.router.navigate(['/packlist']);
    }
    this.loading.set(false);
  }

  async exportRules() {
    await this.facade.exportRules();
  }
}
