import { Injectable } from '@angular/core';
import {
  loadLocalStorage,
  saveLocalStorage,
} from '../../util/localstorage.persistence';
import { rulesTemplate } from '../../model/template';

@Injectable({ providedIn: 'root' })
export class RulesPersistence {
  private rules: string = loadLocalStorage('rules', rulesTemplate);

  getRules(): string {
    return this.rules;
  }

  saveRules(rules: string | undefined | null): void {
    if (rules) {
      this.rules = rules;
      saveLocalStorage('rules', rules);
    }
  }

  resetRules(): void {
    this.rules = rulesTemplate;
    saveLocalStorage('rules', rulesTemplate);
  }
}
