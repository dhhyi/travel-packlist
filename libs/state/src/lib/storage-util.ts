export function loadState<T extends Record<string, unknown>>(
  storage: Storage,
  initial: T,
): T {
  const loaded = storage.getItem('state');
  let state: T;
  if (loaded) {
    const loadedState = JSON.parse(loaded) as T;
    state = { ...initial, ...loadedState };
  } else {
    state = { ...initial };
  }
  return state;
}

function isEqual(a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b) {
    return false;
  }
  if (!!a && !!b && typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    return (
      keysA.length === keysB.length &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      keysA.every((key) => isEqual((a as any)[key], (b as any)[key]))
    );
  }
  return a === b;
}

function filterState<T extends Record<string, unknown>>(
  state: T,
  initialState: T,
): Partial<T> | null {
  const entries = Object.keys(initialState)
    .filter((key) => !isEqual(state[key], initialState[key]))
    .map((key) => {
      return [key, state[key]];
    });
  if (entries.length === 0) {
    return null;
  }
  return Object.fromEntries(entries) as Partial<T>;
}

export function saveState<T extends Record<string, unknown>>(
  storage: Storage,
  state: T,
  initialState: T,
): void {
  const filteredState = filterState(state, initialState);
  if (filteredState === null) {
    storage.removeItem('state');
  } else {
    storage.setItem('state', JSON.stringify(filteredState));
  }
}
