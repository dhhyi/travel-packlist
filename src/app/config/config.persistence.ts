import { inject, Injectable, Injector } from '@angular/core';
import { saveLocalStorage } from '../../util/localstorage.persistence';
import { AppInit } from '../app.init';

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
  private injector = inject(Injector);

  constructor() {
    const loaded = localStorage.getItem('config');
    if (loaded) {
      this.config = JSON.parse(loaded) as typeof defaultConfig;
    }
  }

  private persist() {
    saveLocalStorage('config', JSON.stringify(this.config));
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

    this.injector.get(AppInit).applyTheme();
  }

  getTheme() {
    return this.config.theme;
  }

  setLanguage(lang: Languages) {
    console.log('setLanguage', lang);

    this.config.language = lang;
    this.persist();

    this.injector.get(AppInit).applyLanguage();
  }

  getLanguage() {
    return this.config.language;
  }
}
