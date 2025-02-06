import { createSessionStorageSignalState } from '../persistence/storage-signal';

const create = <K>(key: string, defaultValue: K) =>
  createSessionStorageSignalState(key, defaultValue);

export const clipboardState = () => {
  return {
    clipboard: {
      /** session: items in the clipboard */
      items: create<string[]>('clipboardItems', []),
      /** session: questions in the clipboard */
      questions: create<string[]>('clipboardQuestions', []),
    },
  };
};
