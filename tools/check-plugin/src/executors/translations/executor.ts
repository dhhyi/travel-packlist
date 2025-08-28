import { Executor } from '@nx/devkit';
import { globSync, readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline/promises';

import { ExecutorSchema } from './schema';

interface Translations {
  locale: string;
  translations: Record<string, string>;
}

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

    for (const translation of translations) {
      for (const key of Object.keys(translation.translations)) {
        if (!/^[0-9]+$/.test(key)) {
          console.warn(`Key "${key}" is not a number`);
          errors = true;
        }
      }
    }

    const defaultLocale = translations.find(
      (t) => t.locale === options.defaultLocale,
    );

    if (!defaultLocale) {
      throw new Error(`Default locale not found: ${options.defaultLocale}`);
    }

    const defaultKeys = Object.keys(defaultLocale.translations);

    const nonDefaultTranslations = translations.filter(
      (t) => t.locale !== options.defaultLocale,
    );

    for (const translation of nonDefaultTranslations) {
      translation.translations = Object.fromEntries(
        Object.entries(translation.translations).filter(([key, value]) => {
          if (!defaultKeys.includes(key)) {
            console.warn(
              `Key "${key}" not found in default locale -- removing\n value: ${value}`,
            );
            errors = true;
            return false;
          }

          return true;
        }),
      );
    }

    for (const translation of nonDefaultTranslations) {
      const currentTranslationKeys = Object.keys(translation.translations);
      if (currentTranslationKeys.length !== defaultKeys.length) {
        const missingKeys = defaultKeys.filter(
          (key) => !currentTranslationKeys.includes(key),
        );
        console.warn(
          `Translation for locale "${translation.locale}" is incomplete. The following keys are missing:\n  ${missingKeys.map((key) => `${key}: ${defaultLocale.translations[key]}`).join('\n  ')}`,
        );
        errors = true;
        if (!process.env['CI']) {
          if (options.interactive) {
            console.log(
              `\nPlease provide translations for locale "${translation.locale}"!`,
            );
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const rl = createInterface({
              input: process.stdin,
              output: process.stdout,
            });
            for (const key of missingKeys) {
              console.log(
                `\n${key} - ${defaultLocale.locale}: ${defaultLocale.translations[key]}`,
              );
              const input = await rl.question(translation.locale + ': ');
              translation.translations[key] = input.trim();
            }
          } else {
            console.log('\nRun with --interactive to fix the issues');
          }
        }
      }
    }

    for (const translation of translations) {
      const normalizedTranslations = Object.fromEntries(
        Object.entries(translation.translations)
          .map(([key, value]) => [key.trim(), value.trim()] as const)
          .toSorted(([k1], [k2]) => k1.localeCompare(k2)),
      );
      writeFileSync(
        translation.file,
        JSON.stringify(
          {
            locale: translation.locale,
            translations: normalizedTranslations,
          },
          null,
          2,
        ) + '\n',
      );
    }

    return { success: !errors };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
