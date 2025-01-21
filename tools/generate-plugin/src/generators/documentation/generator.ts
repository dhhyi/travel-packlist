import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'fs';
import * as path from 'path';
import * as showdown from 'showdown';

import { GeneratorSchema } from './schema';

export async function generator(tree: Tree, options: GeneratorSchema) {
  const files = globSync(options.pattern);

  const languages = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    const lang = path.extname(name).substring(1) || 'default';

    const converter = new showdown.Converter();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const markdown = tree.read(file)!.toString('utf-8');
    const html = converter.makeHtml(markdown);

    const folder = path.join(options.path);

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'documentation'),
      folder,
      {
        lang,
        html,
      },
    );

    return lang;
  });

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    languages,
  });

  await formatFiles(tree);
}

export default generator;
