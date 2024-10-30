import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Parser } from '../../model/parser';
import env from '../../environment/env.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe, NgClass } from '@angular/common';
import { IconFlagGermanyComponent } from '../icons/icon-flag-germany/icon-flag-germany.component';
import { IconFlagUkComponent } from '../icons/icon-flag-uk/icon-flag-uk.component';
import { AppState, State } from '../app.state';

const defaultFileName = 'travel-packlist-rules.txt';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    DatePipe,
    NgClass,
    IconFlagGermanyComponent,
    IconFlagUkComponent,
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

  private router = inject(Router);
  private state = inject(AppState);
  private parser = inject(Parser);

  private fadeOutDisabledRules = this.state.signal('fadeOutDisabledRules');
  fadeOutDisabledRulesControl = new FormControl(this.fadeOutDisabledRules());

  private highlightVariableStatus = this.state.signal(
    'highlightVariableStatus',
  );
  highlightVariableStatusControl = new FormControl(
    this.highlightVariableStatus(),
  );

  private trackWeight = this.state.signal('trackWeight');
  trackWeightControl = new FormControl(this.trackWeight());

  categorySortingControl = new FormGroup({
    categorySorting: new FormControl(this.state.get('categorySorting')),
  });

  constructor() {
    this.fadeOutDisabledRulesControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.fadeOutDisabledRules.set(!!value);
      });

    this.highlightVariableStatusControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.highlightVariableStatus.set(!!value);
      });

    this.trackWeightControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.trackWeight.set(!!value);
      });

    this.categorySortingControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.state.set('categorySorting', value.categorySorting!);
      });
  }

  private isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      ua,
    );
  }

  async resetChecklist() {
    if (
      window.confirm(
        $localize`:@@config.checklist.reset.question:Are you sure you want to reset the checklist?` as string,
      )
    ) {
      this.state.resetChecklist();
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

  downloadRules() {
    const rules = this.state.get('rules');
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = defaultFileName;
    a.click();
  }

  async shareRules() {
    const rules = this.state.get('rules');
    await navigator.share({
      title: defaultFileName,
      files: [
        new File([rules], defaultFileName, {
          type: 'text/plain',
        }),
      ],
    });
  }

  async exportRules() {
    if (this.isMobile() && 'share' in navigator) {
      await this.shareRules();
    } else {
      this.downloadRules();
    }
  }

  importRules() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const text = await file.text();
      this.state.set('rules', text);
      try {
        this.parser.parseRules(text);
        await this.router.navigate(['/packlist']);
      } catch (_) {
        await this.router.navigate(['/rules']);
      }
    };
    input.click();
  }

  getTheme() {
    return this.state.get('theme');
  }

  setTheme(theme: State['theme']) {
    this.state.set('theme', theme);
  }

  getLanguage(): string {
    return this.state.get('language');
  }

  setLanguage(lang: State['language']) {
    this.state.set('language', lang);
  }
}
