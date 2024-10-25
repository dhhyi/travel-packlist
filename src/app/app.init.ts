import { inject, Injectable, isDevMode } from '@angular/core';
import { ConfigPersistence, Languages } from './config/config.persistence';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AppInit {
  private config = inject(ConfigPersistence);
  private document = inject(DOCUMENT);

  init() {
    this.applyLanguage();
    this.applyTheme();
  }

  applyTheme() {
    const theme = this.config.getTheme();
    const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((theme === 'system' && userDark) || theme === 'dark') {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

  applyLanguage() {
    const lang = this.config.getLanguage() as Languages | undefined;
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
      }, 100);
    }
  }
}
