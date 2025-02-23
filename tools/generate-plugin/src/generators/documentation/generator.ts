import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'fs';
import * as path from 'path';
import * as showdown from 'showdown';

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

  const documentationFiles = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    const lang = path.extname(name).substring(1) || 'default';
    const group = name.replace(`.${lang}`, '');

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
        group,
      },
    );

    return { group, lang };
  });

  const documentations = documentationFiles.reduce<
    Record<string, string[] | undefined>
  >((acc, { group, lang }) => {
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(lang);
    return acc;
  }, {});

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    documentations: Object.entries(documentations),
    pascalize,
    shout,
    camelize,
  });

  await formatFiles(tree);
}

export default generator;
