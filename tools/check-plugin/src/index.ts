import { createNodesFromFiles, CreateNodesV2 } from '@nx/devkit';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

export const createNodesV2: CreateNodesV2<object> = [
  '**/*.md',
  async (markdownFiles, options, context) => {
    return await createNodesFromFiles(
      (markdownFile, options) => createNodesInternal(markdownFile, options),
      markdownFiles,
      options,
      context,
    );
  },
];

async function createNodesInternal(configFilePath: string, options: object) {
  const projectRoot = dirname(configFilePath).replace(/\\/g, '/');
  const project = projectRoot === '.' ? 'util' : projectRoot;

  const isProject =
    existsSync(join(project, 'project.json')) ||
    existsSync(join(project, 'package.json'));
  if (!isProject) {
    return {};
  }

  return {
    projects: {
      [project]: {
        targets: {
          markdownlint: {
            executor: '@travel-packlist/check-plugin:markdown',
            options: {
              ...options,
              pattern: `${projectRoot}/*.md`,
            },
          },
        },
      },
    },
  };
}
