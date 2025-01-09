import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentsModule } from '@travel-packlist/components';
import { IconDownloadComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { ConfigFacade } from '../config.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-rules-import-export',
  templateUrl: './config-rules-import-export.component.html',
  styleUrl: '../config-section.scss',
  imports: [FormsModule, ComponentsModule, IconDownloadComponent],
})
export class ConfigRulesImportExportComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private state = inject(GLOBAL_STATE);

  exportReminder = this.state.config.exportReminder;
  exportNeeded = this.state.rules.exportNeeded;
  private facade = inject(ConfigFacade);
  readonly highlightExport: Signal<boolean>;
  private readonly exportButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('exportButton');
  isExportAvailable = this.facade.isExportAvailable.bind(this.facade);
  readonly highlightImport: Signal<boolean>;
  private readonly importButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('importButton');

  readonly loading = signal(false);

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
