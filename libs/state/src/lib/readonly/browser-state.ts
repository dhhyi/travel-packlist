import { computed, signal } from '@angular/core';

import {
  LocalStorageState,
  SupportedLanguage,
  supportedLanguages,
} from '../read-write/localstorage-state';

export const browserState = ({ config: { language } }: LocalStorageState) => {
  const scrollY = signal(window.scrollY);
  window.addEventListener('scroll', () => {
    scrollY.set(window.scrollY);
  });
  return {
    browser: {
      /** derived: window.scrollY as signal */
      scrollY,
      /** derived: true if user is on mobile device */
      isMobile: computed(() =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
          navigator.userAgent,
        ),
      ),
    },
    config: {
      /** derived: preferred language, calculation considers user setting and browser setting */
      preferredLanguage: computed(() => {
        const raw = language();
        if (raw === 'auto') {
          const languages = navigator.languages.map((l) => l.split('-')[0]);
          const match = languages.find((l) =>
            (supportedLanguages as unknown as string[]).includes(l),
          ) as SupportedLanguage | undefined;
          return match ?? 'en';
        }
        return raw;
      }),
    },
  };
};
