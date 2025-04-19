import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'fs';
import * as path from 'path';

import { GeneratorSchema } from './schema';

function pascalize(str: string) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function camelize(name: string): string {
  return name.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

function shout(text: string) {
  return text.toUpperCase().replaceAll(/[^\w_]/g, '_');
}

export async function generator(tree: Tree, options: GeneratorSchema) {
  const files = globSync(options.pattern);

  const transformers = files.map((file) =>
    path.basename(file, path.extname(file)),
  );

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    transformers,
    pascalize,
    shout,
    camelize,
  });

  await formatFiles(tree);
}

export default generator;
