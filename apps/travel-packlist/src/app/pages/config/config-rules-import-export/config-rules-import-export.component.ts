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
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '@travel-packlist/components';
import { IconDownloadComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';
import { RulesShare } from '../../../services/rules-share/rules-share.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-rules-import-export',
  templateUrl: './config-rules-import-export.component.html',
  styleUrl: '../config-section.css',
  imports: [FormsModule, CheckboxComponent, IconDownloadComponent],
})
export class ConfigRulesImportExportComponent {
  private state = inject(GLOBAL_STATE);

  exportReminder = this.state.config.exportReminder;
  exportNeeded = this.state.rules.exportNeeded;
  readonly highlightExport: Signal<boolean>;
  private readonly exportButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('exportButton');
  readonly highlightImport: Signal<boolean>;
  private readonly importButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('importButton');

  readonly loading = signal(false);

  constructor() {
    const fragment = this.state.router.fragment;
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
    if (await this.triggerImportRules()) {
      this.state.router.go('packlist');
    }
    this.loading.set(false);
  }

  private rulesShare = inject(RulesShare);

  isExportAvailable(): boolean {
    return !!this.state.rules.localRulesAvailable();
  }

  async exportRules() {
    await this.rulesShare.exportRules();
    this.state.rules.markAsCurrent();
  }

  private async triggerImportRules() {
    if (
      this.state.rules.exportNeeded() &&
      !(await confirm(
        $localize`You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?`,
      ))
    ) {
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt';
      input.addEventListener('cancel', () => {
        resolve(false);
      });
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) {
          resolve(false);
          return;
        }
        const text = await file.text();
        this.state.localRules.updateRules(text);
        this.state.rules.markAsCurrent();
        this.state.packlist.reset();
        resolve(true);
      };
      input.click();
    });
  }
}
