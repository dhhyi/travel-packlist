const eslint = require("@eslint/js");
const angular = require("angular-eslint");
const perfectionist = require("eslint-plugin-perfectionist");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    extends: [eslint.configs.recommended],
    files: ["*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    plugins: { perfectionist },
    rules: {
      curly: "error",
      "perfectionist/sort-imports": "error",
      "perfectionist/sort-objects": ["error", { type: "natural" }],
    },
  },
  {
    extends: [eslint.configs.recommended],
    files: ["**/!(*.config).js"],
    ignores: ["dist/**", "android/**", ".angular/**"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
      sourceType: "commonjs",
    },
    plugins: { perfectionist },
    rules: {
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    extends: [eslint.configs.recommended],
    files: ["**/*.mjs"],
    ignores: ["src/app/generated/**"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
    plugins: { perfectionist },
    rules: {
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    files: ["**/*.spec.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { perfectionist },
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      curly: "error",
      "perfectionist/sort-imports": "error",
    },
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...angular.configs.tsAll,
    ],
    files: ["**/!(*.spec).ts"],
    ignores: ["**/generated/**"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { perfectionist },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/component-max-inline-declarations": [
        "error",
        {
          styles: 10,
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          prefix: "app",
          style: "kebab-case",
          type: "element",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          prefix: "app",
          style: "camelCase",
          type: "attribute",
        },
      ],
      "@angular-eslint/no-host-metadata-property": "off",
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/prefer-standalone-component": "off",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": [
        "error",
        { typesToIgnore: ["string"] },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      curly: "error",
      "no-duplicate-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
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
              name: "@angular/core",
            },
            {
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
              name: "@angular/core",
            },
            {
              importNames: ["HostListener"],
              message:
                "Do not use HostListener, use toSignal(fromEvent) instead.",
              name: "@angular/core",
            },
            {
              importNames: ["HostBinding"],
              message:
                "Do not use HostBinding, use Component 'host' property instead.",
              name: "@angular/core",
            },
            {
              importNames: ["takeUntilDestroyed"],
              message: "Do not use takeUntilDestroyed, use signals instead.",
              name: "@angular/core/rxjs-interop",
            },
          ],
          patterns: [
            {
              message: "Use GlobalState instead",
              regex: "state/(?!global-state).*",
            },
            {
              message: "Use 'icons' instead",
              regex: "icons/icon-.*",
            },
          ],
        },
      ],
      "perfectionist/sort-imports": "error",
    },
  },
  {
    extends: [
      ...angular.configs.templateAll,
      ...angular.configs.templateAccessibility,
    ],
    files: ["**/*.html"],
    ignores: ["dist/**", "android/**"],
    rules: {
      "@angular-eslint/template/i18n": [
        "warn",
        {
          ignoreAttributes: ["d"],
          ignoreTags: ["meta", "link", "noscript"],
        },
      ],
      "@angular-eslint/template/no-call-expression": "off",
      "@angular-eslint/template/prefer-ngsrc": "off",
    },
  }
);
