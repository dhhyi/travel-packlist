/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { StorybookConfig } from '@storybook/angular';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/angular'),
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
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
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

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
