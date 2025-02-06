import { createSessionSignalState } from '../persistence/session-storage-signal';

export const clipboardState = () => {
  return {
    clipboard: {
      /** session: items in the clipboard */
      items: createSessionSignalState<string[]>('clipboardItems', []),
      /** session: questions in the clipboard */
      questions: createSessionSignalState<string[]>('clipboardQuestions', []),
    },
  };
};
