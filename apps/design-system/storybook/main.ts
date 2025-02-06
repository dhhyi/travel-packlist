/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: (config) => {
    // https://github.com/storybookjs/storybook/issues/16438#issuecomment-1910195664
    config.module!.rules = config.module!.rules!.map((rule) => {
      if (
        rule &&
        typeof rule === 'object' &&
        'type' in rule &&
        rule.type === 'asset/resource'
      ) {
        return {
          ...rule,
          test: new RegExp(
            rule.test!.toString().replace('svg|', '').slice(1, -1),
          ),
        };
      } else {
        return rule;
      }
    });
    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
