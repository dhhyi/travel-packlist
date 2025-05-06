const angular = require('angular-eslint');
const { existsSync, statSync } = require('fs');
const tseslint = require('typescript-eslint');

const defaultOptions = {
  prefix: 'unset',
};

const rules = (tsConfigOrFolder, options) => {
  let tsconfig;
  if (statSync(tsConfigOrFolder).isDirectory()) {
    tsconfig = ['lib', 'app', 'spec']
      .map((name) => `${tsConfigOrFolder}/tsconfig.${name}.json`)
      .filter(existsSync);
    if (tsconfig.length === 0) {
      throw new Error(`No tsconfig files found in ${tsConfigOrFolder}`);
    } else if (tsconfig.length === 1) {
      tsconfig = tsconfig[0];
    }
  } else {
    tsconfig = tsConfigOrFolder;
  }
  const config = {
    ...defaultOptions,
    ...options,
  };
  console.log(__dirname);
  console.log('config', config);
  console.log('tsconfig', tsconfig);
  return tseslint.config(
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
            styles: 0,
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            prefix: config.prefix,
            style: 'kebab-case',
            type: 'element',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            prefix: config.prefix,
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
              {
                importNames: ['NgClass'],
                message:
                  'Do not use ngClass, use [class] with object of single keys or [class.clazz] instead.',
                name: '@angular/common',
              },
              {
                importNames: ['NgStyle'],
                message: 'Do not use ngStyle, use [style] instead.',
                name: '@angular/common',
              },
              {
                importNames: ['RouterLink'],
                message: 'Do not use routerLink, use router state instead.',
                name: '@angular/router',
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
            checkId: false,
            ignoreAttributes: [
              'fragment',
              'aria-describedby',
              'aria-labelledby',
              'aria-live',
              'aria-orientation',
              'iconClass',
              'chartClass',
              'fieldSetClass',
            ],
            ignoreTags: ['meta', 'link', 'noscript'],
          },
        ],
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/no-duplicate-attributes': [
          'error',
          { ignore: ['class'] },
        ],
        '@angular-eslint/template/prefer-ngsrc': 'off',
      },
    }
  );
};

module.exports = rules;
