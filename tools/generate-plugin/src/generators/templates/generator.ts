import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { globSync } from 'fs';
import * as path from 'path';

import { GeneratorSchema } from './schema';

function shout(text: string) {
  return text.toUpperCase().replaceAll(/[^\w_]/g, '_');
}

function pascalize(str: string) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function importName(name: string, lang: string) {
  return `../txt/${name}${lang === 'default' ? '' : `.${lang}`}.txt`;
}

export async function generator(tree: Tree, options: GeneratorSchema) {
  const files = globSync(options.pattern);

  const templates = files
    .map((file) => {
      let name = path.basename(file, path.extname(file));
      const lang = path.extname(name).substring(1) || 'default';
      name = name.replace(`.${lang}`, '');

      const folder = path.join(options.path);

      generateFiles(tree, path.join(__dirname, 'files', 'template'), folder, {
        lang,
        name,
        importName,
      });

      return { name, lang };
    })
    .reduce<Record<string, string[]>>((acc, { name, lang }) => {
      (acc[name] ??= []).push(lang);
      return acc;
    }, {});

  generateFiles(tree, path.join(__dirname, 'files', 'src'), options.path, {
    templates: Object.entries(templates),
    shout,
    pascalize,
    importName,
  });

  await formatFiles(tree);
}

export default generator;
