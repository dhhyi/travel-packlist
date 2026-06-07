import baseConfig from '../../eslint.base.config.mjs';
import jsoncEslintParser from 'jsonc-eslint-parser';
import { typescriptRules } from '../eslint-config/src/index.mjs';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...baseConfig,
  {
    extends: typescriptRules,
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncEslintParser,
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
  },
]);
