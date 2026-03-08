import {
  afterRenderEffect,
  computed,
  signal,
  WritableSignal,
} from '@angular/core';

import {
  ConfigState,
  SupportedLanguage,
  supportedLanguages,
} from './config-state';
import { RouterState } from './router-state';

export const browserState = ({
  config: { language, animations },
  router: { navigationRunning },
}: ConfigState & RouterState) => {
  const scrollY = signal(window.scrollY);
  window.addEventListener('scroll', () => {
    scrollY.set(window.scrollY);
  });
  const animateEffect = (clazz: string, field: WritableSignal<string>) =>
    afterRenderEffect(() => {
      if (!navigationRunning() && animations()) {
        field.set(clazz);
      } else {
        field.set('');
      }
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
      /** derived: afterRenderEffect for applying a class to a local WritableSignal to be used for animate.enter or animate.leave  */
      animateEffect,
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
