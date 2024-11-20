// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: "commonjs",
    },
    extends: [eslint.configs.recommended],
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
  {
    files: ["**/!(*.spec).ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...angular.configs.tsAll,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-max-inline-declarations": [
        "error",
        {
          styles: 10,
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/prefer-standalone-component": "off",
      "@angular-eslint/prefer-standalone": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": [
        "error",
        { typesToIgnore: ["string"] },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "state/(?!global-state).*",
              message: "Use GlobalState instead",
            },
          ],
          paths: [
            {
              name: "@angular/core",
              importNames: [
                "OnInit",
                "OnDestroy",
                "OnChanges",
                "DoCheck",
                "AfterContentInit",
                "AfterContentChecked",
                "AfterViewInit",
                "AfterViewChecked",
              ],
              message: "Do not use lifecycle hooks, use effects instead.",
            },
            {
              name: "@angular/core",
              importNames: [
                "ViewChild",
                "ViewChildren",
                "ContentChild",
                "ContentChildren",
                "Input",
                "Output",
                "HostBinding",
              ],
              message: "Do not use decorators, use signals instead.",
            },
            {
              name: "@angular/core",
              importNames: ["HostListener"],
              message:
                "Do not use HostListener, use toSignal(fromEvent) instead.",
            },
            {
              name: "@angular/core",
              importNames: ["HostBinding"],
              message:
                "Do not use HostBinding, use Component 'host' property instead.",
            },
            {
              name: "@angular/core/rxjs-interop",
              importNames: ["takeUntilDestroyed"],
              message: "Do not use takeUntilDestroyed, use signals instead.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateAll,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/i18n": [
        "warn",
        {
          ignoreTags: ["meta", "link", "noscript"],
          ignoreAttributes: ["d"],
        },
      ],
      "@angular-eslint/template/no-call-expression": "off",
    },
  }
);
