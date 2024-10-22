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
  },
);
