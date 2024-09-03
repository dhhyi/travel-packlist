export function loadLocalStorage(item: string, defaultValue: string): string {
  const loaded = localStorage.getItem(item);
  if (!!loaded) {
    console.log('Loaded ' + item + ' from local storage');
  }
  return loaded || defaultValue;
}

export function saveLocalStorage(
  item: string,
  rules: string | undefined | null,
): void {
  if (!!rules) {
    console.log('Saved ' + item + ' to local storage');
    localStorage.setItem(item, rules);
  } else {
    console.log('Deleted ' + item + ' from local storage');
    localStorage.removeItem(item);
  }
}
