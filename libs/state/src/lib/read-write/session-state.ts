import { effect, Signal, signal } from '@angular/core';

import { saveState, loadState } from './storage-util';

const initialState = {
  clipboardItems: [] as string[],
  clipboardQuestions: [] as string[],
};

type State = typeof initialState;

const state = loadState(sessionStorage, initialState);

const createSignal = <K extends keyof State>(
  key: K,
  triggerReset: Signal<boolean>,
) => {
  const newSignal = signal(state[key]);
  effect(
    () => {
      const newValue = newSignal();
      if (newValue !== state[key]) {
        (state[key] as unknown) = newValue;
        persist();
      }
    },
    { manualCleanup: true },
  );
  effect(() => {
    if (triggerReset()) {
      newSignal.set(initialState[key]);
    }
  });
  return newSignal;
};

const persist = () => {
  saveState(sessionStorage, state, initialState);
};

export const sessionState = (triggerReset: Signal<boolean>) => {
  return {
    clipboard: {
      /** session: items in the clipboard */
      items: createSignal('clipboardItems', triggerReset),
      /** session: questions in the clipboard */
      questions: createSignal('clipboardQuestions', triggerReset),
    },
  };
};
