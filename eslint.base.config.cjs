const eslint = require('@eslint/js');
const nx = require('@nx/eslint-plugin');
const perfectionist = require('eslint-plugin-perfectionist');

module.exports = [
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
              onlyDependOnLibsWithTags: ['scope:main'],
              sourceTag: 'scope:testing',
            },
            {
              onlyDependOnLibsWithTags: [
                'scope:state',
                'scope:generated',
                'scope:components',
              ],
              sourceTag: 'scope:main',
            },
            {
              onlyDependOnLibsWithTags: [
                'scope:generated',
                'scope:state',
                'scope:components',
              ],
              sourceTag: 'scope:design',
            },
            {
              onlyDependOnLibsWithTags: ['scope:generated', 'scope:state'],
              sourceTag: 'scope:state',
            },
            {
              onlyDependOnLibsWithTags: ['scope:generated'],
              sourceTag: 'scope:components',
            },
            {
              notDependOnLibsWithTags: ['*'],
              sourceTag: 'scope:generated',
            },
            {
              onlyDependOnLibsWithTags: ['utility'],
              sourceTag: 'plugin',
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
    files: ['**/*.config.{js,ts,cjs,mjs}', '**/*-rules.{js,ts,cjs,mjs}'],
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-objects': ['error', { type: 'natural' }],
    },
  },
];
