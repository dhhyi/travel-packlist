import { Injectable } from '@angular/core';
import { saveLocalStorage } from '../../util/localstorage.persistence';

@Injectable({ providedIn: 'root' })
export class ConfigPersistence {
  private config = {
    fadeOutDisabledRules: false,
  };

  constructor() {
    const loaded = localStorage.getItem('config');
    if (loaded) {
      this.config = JSON.parse(loaded);
    }
  }

  private persist() {
    saveLocalStorage('config', JSON.stringify(this.config));
  }

  setFadeOutDisabledRules(value: boolean) {
    this.config.fadeOutDisabledRules = value;
    this.persist();
  }

  isFadeOutDisabledRules() {
    return this.config.fadeOutDisabledRules;
  }
}
