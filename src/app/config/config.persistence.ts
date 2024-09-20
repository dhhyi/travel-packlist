import { Injectable } from '@angular/core';
import { saveLocalStorage } from '../../util/localstorage.persistence';

const defaultConfig = {
  fadeOutDisabledRules: false,
  trackWeight: false,
  answersLocked: false,
};

@Injectable({ providedIn: 'root' })
export class ConfigPersistence {
  private config: typeof defaultConfig = defaultConfig;

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
}
