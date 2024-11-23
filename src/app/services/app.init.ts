import { effect, inject, Injectable, Injector, isDevMode } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  FontSizes,
  GlobalState,
  SupportedLanguage,
  Themes,
} from '../state/global-state';

@Injectable({ providedIn: 'root' })
export class AppInit {
  private injector = inject(Injector);
  private document = inject(DOCUMENT);

  init() {
    const state = this.injector.get(GlobalState);
    const theme = state.signal('theme');
    effect(() => {
      this.applyTheme(theme());
    });
    const preferredLanguage = state.signal('preferredLanguage');
    effect(() => {
      this.applyLanguage(preferredLanguage());
    });
    const fontSize = state.signal('fontSize');
    effect(() => {
      this.applyFontSize(fontSize());
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
}
