const angular = require('angular-eslint');
const tseslint = require('typescript-eslint');

const rules = (tsconfig) =>
  tseslint.config(
    {
      extends: [...angular.configs.tsAll],
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          project: tsconfig,
        },
      },
      rules: {
        '@angular-eslint/component-max-inline-declarations': [
          'error',
          {
            styles: 10,
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            prefix: 'app',
            style: 'kebab-case',
            type: 'element',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            prefix: 'app',
            style: 'camelCase',
            type: 'attribute',
          },
        ],
        '@angular-eslint/no-host-metadata-property': 'off',
        '@angular-eslint/prefer-standalone': 'off',
        '@angular-eslint/prefer-standalone-component': 'off',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                importNames: [
                  'OnInit',
                  'OnDestroy',
                  'OnChanges',
                  'DoCheck',
                  'AfterContentInit',
                  'AfterContentChecked',
                  'AfterViewInit',
                  'AfterViewChecked',
                ],
                message: 'Do not use lifecycle hooks, use effects instead.',
                name: '@angular/core',
              },
              {
                importNames: [
                  'ViewChild',
                  'ViewChildren',
                  'ContentChild',
                  'ContentChildren',
                  'Input',
                  'Output',
                  'HostBinding',
                ],
                message: 'Do not use decorators, use signals instead.',
                name: '@angular/core',
              },
              {
                importNames: ['HostListener'],
                message:
                  'Do not use HostListener, use toSignal(fromEvent) instead.',
                name: '@angular/core',
              },
              {
                importNames: ['HostBinding'],
                message:
                  "Do not use HostBinding, use Component 'host' property instead.",
                name: '@angular/core',
              },
              {
                importNames: ['Injector'],
                message:
                  'Do not use Injector, use inject without cycles instead.',
                name: '@angular/core',
              },
              {
                importNames: ['takeUntilDestroyed'],
                message: 'Do not use takeUntilDestroyed, use signals instead.',
                name: '@angular/core/rxjs-interop',
              },
            ],
            patterns: [
              {
                group: ['../**/*.component'],
                importNamePattern: 'Component$',
                message: 'Only import deeper nested components.',
              },
            ],
          },
        ],
      },
    },
    {
      extends: [
        ...angular.configs.templateAll,
        ...angular.configs.templateAccessibility,
      ],
      files: ['**/*.html'],
      ignores: ['dist/**', 'android/**'],
      rules: {
        '@angular-eslint/template/i18n': [
          'warn',
          {
            ignoreAttributes: ['d', 'fragment', 'aria-live'],
            ignoreTags: ['meta', 'link', 'noscript'],
          },
        ],
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/prefer-ngsrc': 'off',
      },
    }
  );

module.exports = rules;
