import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RulesPersistence {
    private rules: string = loadRules();

    getRules(): string {
        return this.rules;
    }

    saveRules(rules: string | undefined | null): void {
        if (rules) {
            this.rules = rules;
            saveRules(rules);
        }
    }
}

function loadRules(): string {
    const loadedRules = localStorage.getItem('rules');
    if (!!loadedRules) {
        console.log('Loaded rules from local storage');
    }
    return loadedRules || ':- [category] Item;';
}

function saveRules(rules: string | undefined | null): void {
    if (!!rules) {
        console.log('Saved rules to local storage');
        localStorage.setItem('rules', rules);
    }
}
