import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'glob';
import * as path from 'path';

import { GeneratorSchema } from './schema';

/**
 * make a string pascal case
 */
function classify(name: string): string {
  return (
    name.substring(0, 1).toUpperCase() +
    name.substring(1).replace(/-([a-z])/g, (_, char) => char.toUpperCase())
  );
}

export async function generator(tree: Tree, options: GeneratorSchema) {
  const files = globSync(options.pattern);

  const icons: { icon: string; relative: string }[] = [];

  files.forEach((file) => {
    const name = path.basename(file, path.extname(file));
    const folder = path.dirname(file);
    const icon = path.basename(folder);

    const relative =
      './' +
      path
        .relative(options.path, file)
        .replace(/\\/g, '/')
        .replace('.html', '');
    icons.push({ icon, relative });

    generateFiles(tree, path.join(__dirname, 'files', 'icon'), folder, {
      ...options,
      name,
      icon,
      classify,
    });
  });

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    icons,
    classify,
  });

  await formatFiles(tree);
}

export default generator;
