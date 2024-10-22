import { Injectable, isDevMode } from '@angular/core';
import { saveLocalStorage } from '../../util/localstorage.persistence';

const defaultConfig = {
  fadeOutDisabledRules: false,
  trackWeight: false,
  answersLocked: false,
  theme: 'system' as 'system' | 'light' | 'dark',
  language: 'en' as 'en' | 'de',
};

export type Themes = (typeof defaultConfig)['theme'];

export type Languages = (typeof defaultConfig)['language'];

@Injectable({ providedIn: 'root' })
export class ConfigPersistence {
  private config: typeof defaultConfig = defaultConfig;

  constructor() {
    const loaded = localStorage.getItem('config');
    if (loaded) {
      this.config = JSON.parse(loaded) as typeof defaultConfig;
      this.applyLanguage();
      this.applyTheme();
    }
  }

  private persist() {
    saveLocalStorage('config', JSON.stringify(this.config));
  }

  private applyTheme() {
    const theme = this.config.theme;
    const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((theme === 'system' && userDark) || theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private applyLanguage() {
    const lang = this.config.language as Languages | undefined;
    if (lang && document.documentElement.lang !== lang) {
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

  resetConfig() {
    this.config = defaultConfig;
    this.persist();
  }

  setFadeOutDisabledRules(value: boolean) {
    this.config.fadeOutDisabledRules = value;
    this.persist();
  }

  isFadeOutDisabledRules() {
    return this.config.fadeOutDisabledRules;
  }

  setTrackWeight(value: boolean) {
    this.config.trackWeight = value;
    this.persist();
  }

  isTrackWeight() {
    return this.config.trackWeight;
  }

  isAnswersLocked() {
    return this.config.answersLocked;
  }

  setAnswersLocked(value: boolean) {
    this.config.answersLocked = value;
    this.persist();
  }

  setTheme(value: Themes) {
    this.config.theme = value;
    this.persist();

    this.applyTheme();
  }

  getTheme() {
    return this.config.theme;
  }

  setLanguage(lang: Languages) {
    console.log('setLanguage', lang);

    this.config.language = lang;
    this.persist();

    this.applyLanguage();
  }

  getLanguage() {
    return this.config.language;
  }
}
