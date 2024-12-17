// @ts-check

import fs from 'fs';
import path from 'path';
import showdown from 'showdown';

const folder = 'src/doc';
const srcFolder = 'src';
const outputFolder = `${srcFolder}/lib`;
const pattern = /documentation\.?(?<lang>.+)?\.md/;

const documents = fs
  .readdirSync(folder)
  .filter((file) => pattern.test(file))
  .map((file) => {
    const match = pattern.exec(file);
    const lang = match?.groups?.lang;
    const input = `${folder}/${file}`;
    const output = `${outputFolder}/${lang ?? 'default'}.ts`;
    return { input, output, lang };
  });

/**
 * @param {string} input
 * @returns {string}
 */
function convertMarkdown(input) {
  const converter = new showdown.Converter();

  const markdown = fs.readFileSync(input, { encoding: 'utf-8' });
  const html = converter.makeHtml(markdown);
  return html;
}

/**
 * @param {string} html
 * @returns {string}
 */
function langTSTemplate(html) {
  return `const documentation = \`${html}\`\nexport default documentation;`;
}

/**
 * @param {{output: string, lang: string|undefined}[]} languages
 * @returns {string}
 */
function indexTSTemplate(languages) {
  const imports = languages
    .map(({ output, lang }) => {
      const outputWithoutExtension = output.replace(/\.ts$/, '');
      return `import documentation_${lang ?? 'default'} from "./${path.relative(srcFolder, outputWithoutExtension).replaceAll('\\', '/')}";`;
    })
    .join('\n');

  const mapping = languages
    .filter(({ lang }) => !!lang)
    .map(({ lang }) => {
      return `  if (locale.startsWith('${lang ?? ''}')) {
    return documentation_${lang ?? 'default'};
  }`;
    })
    .concat('  return documentation_default;')
    .join('\n');

  return `import {
  EnvironmentProviders,
  InjectionToken,
  LOCALE_ID,
  makeEnvironmentProviders,
} from '@angular/core';

${imports}

export const RULES_DOCUMENTATION = new InjectionToken<string>(
  'RULES_DOCUMENTATION',
);

function getRulesDocumentation(locale: string): string {
${mapping}
}

export function provideRulesDocumentation(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: RULES_DOCUMENTATION,
      useFactory: getRulesDocumentation,
      deps: [LOCALE_ID],
    },
  ]);
}
`;
}

fs.mkdirSync(outputFolder, { recursive: true });

for (const { input, output } of documents) {
  console.log(`converting ${input} to ${output}`);
  const converted = langTSTemplate(convertMarkdown(input));
  fs.writeFileSync(output, converted);
}

console.log(`generating ${srcFolder}/index.ts`);

fs.writeFileSync(`${srcFolder}/index.ts`, indexTSTemplate(documents));
