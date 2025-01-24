import { createNodesFromFiles, CreateNodesV2 } from '@nx/devkit';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

export const createNodesV2: CreateNodesV2<object> = [
  '**/{*.md,tsconfig.json,tsconfig.base.json}',
  async (files, options, context) => {
    const { markdown, tsconfig } = files.reduce(
      (acc, f) => {
        if (f.endsWith('.md')) {
          acc.markdown.push(f);
        } else {
          acc.tsconfig.push(f);
        }
        return acc;
      },
      {
        markdown: [] as string[],
        tsconfig: [] as string[],
      },
    );
    return [
      ...(await createNodesFromFiles(
        (markdownFile, options) => createMarkdownLint(markdownFile, options),
        markdown,
        options,
        context,
      )),
      ...(await createNodesFromFiles(
        (tsConfigFile) => createTSConfigLint(tsConfigFile),
        tsconfig,
        options,
        context,
      )),
    ];
  },
];

function createMarkdownLint(markdownFilePath: string, options?: object) {
  const projectRoot = dirname(markdownFilePath).replace(/\\/g, '/');

  const isProject =
    existsSync(join(projectRoot, 'project.json')) ||
    existsSync(join(projectRoot, 'package.json'));
  if (!isProject) {
    return {};
  }

  return {
    projects: {
      [projectRoot]: {
        implicitDependencies: ['check-plugin'],
        targets: {
          markdownlint: {
            executor: '@travel-packlist/check-plugin:markdown',
            options: {
              ...options,
              pattern: `${projectRoot}/*.md`,
            },
            inputs: ['default', '{projectRoot}/*.md'],
          },
        },
      },
    },
  };
}

function createTSConfigLint(tsConfigFilePath: string) {
  const projectRoot = dirname(tsConfigFilePath).replace(/\\/g, '/');

  const isProject =
    existsSync(join(projectRoot, 'project.json')) ||
    existsSync(join(projectRoot, 'package.json'));
  if (!isProject) {
    return {};
  }

  if (tsConfigFilePath.endsWith('tsconfig.base.json')) {
    return {
      projects: {
        [projectRoot]: {
          implicitDependencies: ['check-plugin'],
          targets: {
            tsconfiglint: {
              executor: '@travel-packlist/check-plugin:tsconfig',
              options: {
                pattern: tsConfigFilePath,
              },
              inputs: [
                '{workspaceRoot}/tsconfig.base.json',
                '{workspaceRoot}/tools/check-plugin/src/index.ts',
                '{workspaceRoot}/tools/check-plugin/src/executors/tsconfig/executor.ts',
              ],
              outputs: ['{workspaceRoot}/tsconfig.base.json'],
            },
          },
        },
      },
    };
  } else {
    return {
      projects: {
        [projectRoot]: {
          implicitDependencies: ['check-plugin'],
          targets: {
            tsconfiglint: {
              executor: '@travel-packlist/check-plugin:tsconfig',
              options: {
                pattern: '{projectRoot}/**/tsconfig*.json',
              },
              inputs: [
                '{projectRoot}/**/tsconfig*.json',
                '{workspaceRoot}/tools/check-plugin/src/index.ts',
                '{workspaceRoot}/tools/check-plugin/src/executors/tsconfig/executor.ts',
              ],
              outputs: ['{projectRoot}/**/tsconfig*.json'],
            },
          },
        },
      },
    };
  }
}
