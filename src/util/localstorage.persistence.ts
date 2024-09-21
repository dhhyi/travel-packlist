export function loadLocalStorage(key: string, defaultValue: string): string {
  const loaded = localStorage.getItem(key);
  if (loaded) {
    console.log('Loaded ' + key + ' from local storage');
  }
  return loaded ?? defaultValue;
}

export function saveLocalStorage(
  key: string,
  value: string | undefined | null,
): void {
  if (value) {
    if (value !== localStorage.getItem(key)) {
      console.log('Saved ' + key + ' to local storage');
      localStorage.setItem(key, value);
    }
  } else {
    console.log('Deleted ' + key + ' from local storage');
    localStorage.removeItem(key);
  }
}
