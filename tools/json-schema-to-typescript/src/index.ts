import { createNodesFromFiles, CreateNodesV2 } from '@nx/devkit';
import { createHash } from 'crypto';
import { existsSync } from 'fs';
import { join } from 'path';

export const createNodesV2: CreateNodesV2<object> = [
  '**/*schema.json',
  async (schemaFiles, options, context) =>
    await createNodesFromFiles(
      (schemaFile) => createNodesInternal(schemaFile),
      schemaFiles,
      options,
      context,
    ),
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

  const regex = /\/(executor|generator)s\/([\w-]+)\/schema\.json$/;
  let id: string;
  if (regex.test(schemaInputWithRoot)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [, type, name] = regex.exec(schemaInputWithRoot)!;
    id = `${name}-${type}`;
  } else {
    id = createHash('sha1').update(schemaInput).digest('hex').substring(0, 8);
  }

  return {
    projects: {
      [project]: {
        implicitDependencies: ['json-schema-to-typescript'],
        targets: {
          ['schema2ts-' + id]: {
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
          generate: {
            dependsOn: ['schema2ts-*'],
          },
        },
      },
    },
  };
}
