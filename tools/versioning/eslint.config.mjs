import baseConfig from '../../eslint.base.config.mjs';
import jsoncEslintParser from 'jsonc-eslint-parser';

import typescriptRules from '../../util/typescript-rules.js';

export default [
  ...baseConfig,
  typescriptRules,
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
];
