export function loadRules(): string {
    const loadedRules = localStorage.getItem('rules');
    if (!!loadedRules) {
        console.log('Loaded rules from local storage');
    }
    return loadedRules || 'Rules go here';
}

export function saveRules(rules: string | undefined | null): void {
    if (!!rules) {
        console.log('Saved rules to local storage');
        localStorage.setItem('rules', rules);
    }
}
