import { createNodesFromFiles, CreateNodesV2 } from '@nx/devkit';
import { createHash } from 'crypto';
import { existsSync } from 'fs';
import { join } from 'path';

export const createNodesV2: CreateNodesV2<object> = [
  '**/schema.json',
  async (schemaFiles, options, context) => {
    return await createNodesFromFiles(
      (schemaFile) => createNodesInternal(schemaFile),
      schemaFiles,
      options,
      context,
    );
  },
];

// eslint-disable-next-line @typescript-eslint/require-await
async function createNodesInternal(schemaInput: string) {
  const project = schemaInput.replace(/\/src\/.*$/, '');
  const schemaInputRelative = schemaInput.replace(project + '/', '');

  const isProject =
    existsSync(join(project, 'project.json')) ||
    existsSync(join(project, 'package.json'));
  if (!isProject) {
    return {};
  }

  const schemaInputWithRoot = `{projectRoot}/${schemaInputRelative}`;
  const schemaOutputWithRoot = schemaInputWithRoot.replace(/\.json$/, '.d.ts');

  const shaPath = createHash('sha1')
    .update(schemaInput)
    .digest('hex')
    .substring(0, 8);

  return {
    projects: {
      [project]: {
        implicitDependencies: ['json-schema-to-typescript'],
        targets: {
          ['schema2ts-' + shaPath]: {
            executor: 'nx:run-commands',
            options: {
              commands: [
                `json2ts --input=${schemaInputWithRoot} --output=${schemaOutputWithRoot}`,
              ],
            },
            inputs: [schemaInputWithRoot],
            outputs: [schemaOutputWithRoot],
            cache: true,
          },
        },
      },
    },
  };
}
