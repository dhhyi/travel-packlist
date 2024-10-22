import { Injectable } from '@angular/core';
import { saveLocalStorage } from '../../util/localstorage.persistence';

const defaultConfig = {
  fadeOutDisabledRules: false,
  trackWeight: false,
  answersLocked: false,
  theme: 'system' as 'system' | 'light' | 'dark',
};

export type Themes = (typeof defaultConfig)['theme'];

@Injectable({ providedIn: 'root' })
export class ConfigPersistence {
  private config: typeof defaultConfig = defaultConfig;

  constructor() {
    const loaded = localStorage.getItem('config');
    if (loaded) {
      this.config = JSON.parse(loaded) as typeof defaultConfig;
      this.applyTheme();
    }
  }

  private persist() {
    saveLocalStorage('config', JSON.stringify(this.config));
  }

  applyTheme() {
    const theme = this.config.theme;
    const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((theme === 'system' && userDark) || theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
}
