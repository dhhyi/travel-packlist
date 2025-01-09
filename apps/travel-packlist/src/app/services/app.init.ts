import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, isDevMode } from '@angular/core';
import {
  FontSizes,
  GLOBAL_STATE,
  SupportedLanguage,
  Themes,
} from '@travel-packlist/state';

@Injectable({ providedIn: 'root' })
export class AppInit {
  private state = inject(GLOBAL_STATE);
  private document = inject(DOCUMENT);

  init() {
    effect(() => {
      this.applyTheme(this.state.config.theme());
    });
    effect(() => {
      this.applyLanguage(this.state.config.preferredLanguage());
    });
    effect(() => {
      this.applyFontSize(this.state.config.fontSize());
    });
    effect(() => {
      this.applyAccessibilityClass(this.state.config.accessibility());
    });
  }

  private applyTheme(theme: Themes | undefined) {
    const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((theme === 'system' && userDark) || theme === 'dark') {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

  private applyLanguage(lang: SupportedLanguage | undefined) {
    if (lang && this.document.documentElement.lang !== lang) {
      if (isDevMode()) {
        console.warn('Language switching is disabled in dev mode');
        return;
      }
      const href = window.location.href;
      const hash = window.location.hash;
      const index = `index${lang === 'en' ? '' : `.${lang}`}.html`;
      const hrefWithoutHash = href.substring(0, href.indexOf(hash));
      const newUrl = hrefWithoutHash + index + window.location.hash;
      setTimeout(() => {
        window.location.href = newUrl;
      }, 0);
    }
  }

  private applyFontSize(size: FontSizes | undefined) {
    document.documentElement.style.setProperty(
      '--html-font-size',
      size === 'small' ? '16px' : size === 'normal' ? '18px' : '20px',
    );
  }

  private applyAccessibilityClass(clazz: 'accessible' | 'compact') {
    document.documentElement.classList.remove('accessible', 'compact');
    document.documentElement.classList.add(clazz);
  }
}
