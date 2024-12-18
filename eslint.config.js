const { includeIgnoreFile } = require('@eslint/compat');
const eslint = require('@eslint/js');
const nx = require('@nx/eslint-plugin');
const perfectionist = require('eslint-plugin-perfectionist');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: ['*'],
              sourceTag: '*',
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs'],
    plugins: { perfectionist },
    rules: {
      curly: 'error',
      'no-duplicate-imports': 'error',
      'perfectionist/sort-imports': 'error',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    rules: {
      ...eslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.config.{js,ts}'],
    rules: {
      'perfectionist/sort-objects': ['error', { type: 'natural' }],
    },
  },
];
