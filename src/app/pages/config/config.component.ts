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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import env from '../../../environment/env.json';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { GlobalState, Languages, Themes } from '../../state/global-state';
import { ConfigFacade } from './config.facade';
import { IconDownloadComponent } from '../../icons/icon-download/icon-download.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { FlagGermanyComponent } from '../../icons/flag-germany/flag-germany.component';
import { FlagUkComponent } from '../../icons/flag-uk/flag-uk.component';
import { confirm } from '../../dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    DatePipe,
    NgClass,
    FlagGermanyComponent,
    FlagUkComponent,
    IconDownloadComponent,
  ],
  templateUrl: './config.component.html',
  styles: `
    .section {
      @apply mb-3 flex flex-col gap-2 border-b pb-2;
    }
  `,
})
export class ConfigComponent {
  env = env;
  loading = signal(false);

  displayKoFi = !ANDROID;
  displayServiceWorkerStatus = !ANDROID;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private state = inject(GlobalState);
  fadeOutDisabledRules = this.state.signal('fadeOutDisabledRules');
  highlightVariableStatus = this.state.signal('highlightVariableStatus');
  refactorVariables = this.state.signal('refactorVariables');
  trackWeight = this.state.signal('trackWeight');
  categorySorting = this.state.signal('categorySorting');
  exportReminder = this.state.signal('exportReminder');

  exportNeeded = this.state.signal('exportNeeded');
  private facade = inject(ConfigFacade);
  highlightExport: Signal<boolean>;
  private exportButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('exportButton');
  isExportAvailable = this.facade.isExportAvailable.bind(this.facade);

  serviceWorkerStatus = computed((): string => {
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
    effect(() => {
      const fragmentValue = fragment();
      if (fragmentValue === 'export-now') {
        setTimeout(() => {
          this.exportButton().nativeElement.scrollIntoView({
            behavior: 'smooth',
          });
        }, 2000);
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

  getTheme() {
    return this.state.get('theme');
  }

  setTheme(theme: Themes) {
    this.state.set('theme', theme);
  }

  getLanguage(): string {
    return this.state.get('language');
  }

  setLanguage(lang: Languages) {
    this.state.set('language', lang);
  }
}
