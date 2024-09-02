import { Injectable } from "@angular/core";
import { loadLocalStorage, saveLocalStorage } from "../../util/localstorage.persistence";

@Injectable({ providedIn: 'root' })
export class RulesPersistence {
    private rules: string = loadLocalStorage('rules', ':- [category] Item;');

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
