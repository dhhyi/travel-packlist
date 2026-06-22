import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export const typescriptRules = defineConfig(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unnecessary-parameter-property-assignment':
        'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/require-array-sort-compare': 'error',
      eqeqeq: 'error',
      'perfectionist/sort-imports': 'error',
    },
  },
  {
    files: ['**/*.test.ts'],
    ...vitest.configs['all'],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
      ...vitest.configs['all'].rules,
      'vitest/no-hooks': 'off',
      'vitest/no-importing-vitest-globals': 'error',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-importing-vitest-globals': 'off',
    },
  }
);
