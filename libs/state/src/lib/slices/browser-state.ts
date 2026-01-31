import { computed, signal } from '@angular/core';

import {
  ConfigState,
  SupportedLanguage,
  supportedLanguages,
} from './config-state';

export const browserState = ({
  config: { language, animations },
}: ConfigState) => {
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
      /** action: run a callback in view-transition if supported and enabled in config */
      viewTransition: (callback: () => void) => {
        if (animations() && 'startViewTransition' in document) {
          document.startViewTransition(callback);
        } else {
          callback();
        }
      },
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
