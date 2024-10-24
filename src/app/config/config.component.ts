import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PacklistPersistence } from '../packlist/packlist.persistence';
import { RulesPersistence } from '../rules/rules.persistence';
import { Parser } from '../../model/parser';
import env from '../../environment/env.json';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConfigPersistence, Languages, Themes } from './config.persistence';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe, NgClass } from '@angular/common';
import { IconFlagGermanyComponent } from '../icons/icon-flag-germany/icon-flag-germany.component';
import { IconFlagUkComponent } from '../icons/icon-flag-uk/icon-flag-uk.component';

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
  packlist = inject(PacklistPersistence);
  rules = inject(RulesPersistence);
  env = env;

  private router = inject(Router);
  private config = inject(ConfigPersistence);
  private parser = inject(Parser);

  fadeOutDisabledRulesControl = new FormControl(
    this.config.isFadeOutDisabledRules(),
  );

  trackWeightControl = new FormControl(this.config.isTrackWeight());

  constructor() {
    this.fadeOutDisabledRulesControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.config.setFadeOutDisabledRules(!!value);
      });

    this.trackWeightControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.config.setTrackWeight(!!value);
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
      this.packlist.saveAnswers({});
      this.packlist.setCheckedItems([]);
      this.packlist.setCollapsedCategories([]);
      this.config.setAnswersLocked(false);
      await this.router.navigate(['/packlist']);
    }
  }

  async resetEverything() {
    if (
      window.confirm(
        $localize`:@@config.dangerzone.reset.question:Are you sure you want to reset the whole application?` as string,
      )
    ) {
      this.packlist.saveAnswers({});
      this.packlist.setCheckedItems([]);
      this.packlist.setCollapsedCategories([]);
      this.rules.resetRules();
      this.config.resetConfig();
      await this.router.navigate(['/packlist']);
    }
  }

  downloadRules() {
    const rules = this.rules.getRules();
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = defaultFileName;
    a.click();
  }

  async shareRules() {
    const rules = this.rules.getRules();
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
      this.rules.saveRules(text);
      try {
        this.parser.parseRules(text);
        await this.router.navigate(['/packlist']);
      } catch (_) {
        await this.router.navigate(['/rules']);
      }
    };
    input.click();
  }

  setTheme(theme: Themes) {
    this.config.setTheme(theme);
  }

  getTheme() {
    return this.config.getTheme();
  }

  getLanguage(): string {
    return this.config.getLanguage();
  }

  setLanguage(lang: Languages) {
    this.config.setLanguage(lang);
  }
}
