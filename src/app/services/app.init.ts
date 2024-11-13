import { inject, Injectable, Injector, isDevMode } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { GlobalState, Languages, Themes } from '../state/global-state';

@Injectable({ providedIn: 'root' })
export class AppInit {
  private injector = inject(Injector);
  private document = inject(DOCUMENT);

  init() {
    const state = this.injector.get(GlobalState);
    toObservable(state.signal('theme'), {
      injector: this.injector,
    }).subscribe((theme) => {
      this.applyTheme(theme);
    });
    toObservable(state.signal('language'), {
      injector: this.injector,
    }).subscribe((lang) => {
      this.applyLanguage(lang);
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

  private applyLanguage(lang: Languages | undefined) {
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
}
