import { Executor } from '@nx/devkit';
import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

import { ExecutorSchema } from './schema';

interface Translations {
  locale: string;
  translations: Record<string, string>;
}

// eslint-disable-next-line @typescript-eslint/require-await
const run: Executor<ExecutorSchema> = async (options) => {
  try {
    let errors = false;
    const files = globSync(options.pattern);

    if (files.length === 0) {
      throw new Error(`No files found for pattern: ${options.pattern}`);
    }

    const translations = files.map((file) => {
      const content = readFileSync(file, { encoding: 'utf-8' });

      return { ...(JSON.parse(content) as Translations), file };
    });

    translations.forEach((translation) => {
      Object.keys(translation.translations).forEach((key) => {
        if (!/^[a-z][a-z0-9.-]*[a-z0-9]$/.test(key)) {
          console.warn(`Key "${key}" is not snake case`);
          errors = true;
        }
      });
    });

    translations.forEach((translation) => {
      translation.translations = Object.fromEntries(
        Object.entries(translation.translations)
          .map(([key, value]) => [key.trim(), value.trim()] as const)
          .sort(([k1], [k2]) => k1.localeCompare(k2)),
      );
    });

    const defaultLocale = translations.find(
      (t) => t.locale === options.defaultLocale,
    );

    if (!defaultLocale) {
      throw new Error(`Default locale not found: ${options.defaultLocale}`);
    }

    const defaultKeys = Object.keys(defaultLocale.translations);

    translations
      .filter((t) => t.locale !== options.defaultLocale)
      .forEach((translation) => {
        translation.translations = Object.fromEntries(
          Object.entries(translation.translations).filter(([key]) => {
            if (!defaultKeys.includes(key)) {
              console.warn(`Key "${key}" not found in default locale`);
              errors = true;
              return false;
            }

            return true;
          }),
        );
      });

    translations
      .filter((t) => t.locale !== options.defaultLocale)
      .forEach((translation) => {
        const currentTranslationKeys = Object.keys(translation.translations);
        if (currentTranslationKeys.length !== defaultKeys.length) {
          const missingKeys = defaultKeys.filter(
            (key) => !currentTranslationKeys.includes(key),
          );
          console.warn(
            `Translation for locale "${translation.locale}" is incomplete. The following keys are missing:\n  ${missingKeys.join('\n  ')}`,
          );
          errors = true;
        }
      });

    translations.forEach((translation) => {
      writeFileSync(
        translation.file,
        JSON.stringify(
          {
            locale: translation.locale,
            translations: translation.translations,
          },
          null,
          2,
        ) + '\n',
      );
    });

    return { success: !errors };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
