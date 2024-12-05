const eslint = require("@eslint/js");
const angular = require("angular-eslint");
const perfectionist = require("eslint-plugin-perfectionist");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.js"],
    ignores: ["dist/**", "android/**", ".angular/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    plugins: { perfectionist },
    extends: [eslint.configs.recommended],
    rules: {
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: { perfectionist },
    extends: [eslint.configs.recommended],
    rules: {
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { perfectionist },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    files: ["**/!(*.spec).ts"],
    ignores: ["**/generated/**"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { perfectionist },
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
      "@angular-eslint/no-host-metadata-property": "off",
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
      curly: "error",
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
      "perfectionist/sort-imports": "error",
    },
  },
  {
    files: ["**/*.html"],
    ignores: ["dist/**", "android/**"],
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
      "@angular-eslint/template/prefer-ngsrc": "off",
    },
  }
);
