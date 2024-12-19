import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'glob';
import * as path from 'path';

import { GeneratorSchema } from './schema';

export async function generator(tree: Tree, options: GeneratorSchema) {
  const files = globSync(options.pattern);

  const languages = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    const lang = path.extname(name).substring(1) || 'default';

    const content = tree.read(file).toString('utf-8');

    const folder = path.join(options.path);

    generateFiles(tree, path.join(__dirname, 'files', 'template'), folder, {
      lang,
      content,
    });

    return lang;
  });

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    languages,
  });

  await formatFiles(tree);
}

export default generator;
