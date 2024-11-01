import {
  effect,
  inject,
  Injectable,
  Injector,
  signal,
  WritableSignal,
} from '@angular/core';

const initialState = {
  clipboardItems: [] as string[],
  clipboardQuestions: [] as string[],
};

export type SessionStateType = typeof initialState;
type Keys = keyof SessionStateType;
export const sessionStateKeys = Object.keys(initialState) as Keys[];

@Injectable({ providedIn: 'root' })
export class SessionState {
  private state: SessionStateType = initialState;
  private injector = inject(Injector);

  private signalMap = new Map<Keys, WritableSignal<SessionStateType[Keys]>>();

  constructor() {
    const loaded = sessionStorage.getItem('state');
    if (loaded) {
      this.state = JSON.parse(loaded) as SessionStateType;
      this.state = { ...initialState, ...this.state };
    } else {
      this.state = { ...initialState };
    }
    this.initializeSignals();
  }

  private initializeSignals() {
    for (const key of sessionStateKeys) {
      const newSignal = signal(this.state[key]);
      effect(
        () => {
          const newValue = newSignal();
          if (newValue !== this.state[key]) {
            (this.state[key] as unknown) = newValue;
            this.persist();
          }
        },
        { manualCleanup: true, injector: this.injector },
      );
      this.signalMap.set(key, newSignal);
    }
  }

  private persist() {
    sessionStorage.setItem('state', JSON.stringify(this.state));
  }

  signal<K extends Keys>(key: K): WritableSignal<SessionStateType[K]> {
    return this.signalMap.get(key) as WritableSignal<SessionStateType[K]>;
  }

  set<K extends Keys>(key: K, value: SessionStateType[K]) {
    this.signal(key).set(value);
  }

  get<K extends Keys>(key: K): SessionStateType[K] {
    return this.signal(key)();
  }

  reset() {
    this.state = { ...initialState };
    this.persist();
    sessionStateKeys.forEach((key) => {
      this.signal(key).set(initialState[key]);
    });
  }
}
