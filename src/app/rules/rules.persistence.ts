import { Injectable } from '@angular/core';
import {
  loadLocalStorage,
  saveLocalStorage,
} from '../../util/localstorage.persistence';

const template = `:- Do you want to find out how this app works? $explore(false);

explore :-
[Tutorial] This app creates a conditional checklist of items after you answer some questions.,
Want to know even more? $more(false);

explore AND more :-
[Tutorial] You will find documentation in the configuration :);

explore OR more :-
[Tutorial] Have fun exploring everything.;

:- [Tutorial] Toggle me!;
NOT more :- [Tutorial] Toggle me too!;
`;

@Injectable({ providedIn: 'root' })
export class RulesPersistence {
  private rules: string = loadLocalStorage('rules', template);

  getRules(): string {
    return this.rules;
  }

  saveRules(rules: string | undefined | null): void {
    if (rules) {
      this.rules = rules;
      saveLocalStorage('rules', rules);
    }
  }
}
