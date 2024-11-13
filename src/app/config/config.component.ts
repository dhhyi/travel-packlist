import {
  Component,
  inject,
  ChangeDetectionStrategy,
  signal,
  effect,
  Injector,
  Signal,
  computed,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import env from '../../environment/env.json';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { IconFlagGermanyComponent } from '../icons/icon-flag-germany/icon-flag-germany.component';
import { IconFlagUkComponent } from '../icons/icon-flag-uk/icon-flag-uk.component';
import { GlobalState, Languages, Themes } from '../state/global-state';
import { ResetEffects } from '../effects/reset.effects';
import { ImportExportRulesEffects } from '../effects/import-export-rules.effects';
import { IconDownloadComponent } from '../icons/icon-download/icon-download.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    DatePipe,
    NgClass,
    IconFlagGermanyComponent,
    IconFlagUkComponent,
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

  private injector = inject(Injector);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private state = inject(GlobalState);
  fadeOutDisabledRules = this.state.signal('fadeOutDisabledRules');
  highlightVariableStatus = this.state.signal('highlightVariableStatus');
  trackWeight = this.state.signal('trackWeight');
  categorySorting = this.state.signal('categorySorting');
  exportReminder = this.state.signal('exportReminder');

  private reset = inject(ResetEffects);

  exportNeeded = this.state.signal('exportNeeded');
  private impExp = inject(ImportExportRulesEffects);
  highlightExport: Signal<boolean>;
  @ViewChild('exportButton', { read: ElementRef })
  private exportButton!: ElementRef;
  isExportAvailable = this.impExp.isExportAvailable.bind(this.impExp);

  constructor() {
    const fragment = toSignal(this.route.fragment, { injector: this.injector });
    this.highlightExport = computed(() => fragment() === 'export-now');
    effect(
      () => {
        const fragmentValue = fragment();
        if (fragmentValue === 'export-now') {
          setTimeout(() => {
            (
              this.exportButton.nativeElement as HTMLButtonElement
            ).scrollIntoView({
              behavior: 'smooth',
            });
          }, 2000);
        }
      },
      { injector: this.injector },
    );
  }

  async resetChecklist() {
    if (
      window.confirm(
        $localize`:@@config.checklist.reset.question:Are you sure you want to reset the checklist?` as string,
      )
    ) {
      this.reset.resetChecklist();
      await this.router.navigate(['/packlist']);
    }
  }

  async resetEverything() {
    if (
      window.confirm(
        $localize`:@@config.dangerzone.reset.question:Are you sure you want to reset the whole application?` as string,
      )
    ) {
      this.state.reset();
      await this.router.navigate(['/packlist']);
    }
  }

  async importRules() {
    this.loading.set(true);
    if (await this.impExp.importRules()) {
      await this.router.navigate(['/packlist']);
    }
    this.loading.set(false);
  }

  async exportRules() {
    await this.impExp.exportRules();
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
