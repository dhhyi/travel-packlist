// @ts-check

import fs from 'fs';
import path from 'path';

const folder = 'src/txt';
const srcFolder = 'src';
const outputFolder = `${srcFolder}/lib`;
const pattern = /template\.?(?<lang>.+)?\.txt/;

const templates = fs
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
function readFile(input) {
  return fs.readFileSync(input, { encoding: 'utf-8' });
}

/**
 * @param {string} txt
 * @returns {string}
 */
function templateTSTemplate(txt) {
  return `const template = \`${txt}\`\nexport default template;`;
}

/**
 * @param {{output: string, lang: string|undefined}[]} languages
 * @returns {string}
 */
function indexTSTemplate(languages) {
  const imports = languages
    .map(({ output, lang }) => {
      const outputWithoutExtension = output.replace(/\.ts$/, '');
      return `import template_${lang ?? 'default'} from "./${path.relative(srcFolder, outputWithoutExtension).replaceAll('\\', '/')}";`;
    })
    .join('\n');

  const mapping = languages
    .filter(({ lang }) => !!lang)
    .map(({ lang }) => {
      return `  if (locale.startsWith('${lang ?? ''}')) {
    return template_${lang ?? 'default'};
  }`;
    })
    .concat('  return template_default;')
    .join('\n');

  return `import {
  EnvironmentProviders,
  InjectionToken,
  LOCALE_ID,
  makeEnvironmentProviders,
} from '@angular/core';

${imports}

export const RULES_TEMPLATE = new InjectionToken<string>(
  'RULES_TEMPLATE',
);

function getRulesTemplate(locale: string): string {
${mapping}
}

export function provideRulesTemplate(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: RULES_TEMPLATE,
      useFactory: getRulesTemplate,
      deps: [LOCALE_ID],
    },
  ]);
}
`;
}

/**
 * @param {string} language
 */
function testTemplate(language) {
  return `import { TestBed } from '@angular/core/testing';
import { Parser } from '@travel-packlist/model';

import template from './${language}';

describe('${language} template', () => {
  it('should parse', () => {
    const parser = TestBed.inject(Parser);
    const result = parser.parseRules(template);
    expect(result).toBeDefined();
  });
});
`;
}

fs.mkdirSync(outputFolder, { recursive: true });

for (const { input, output, lang } of templates) {
  console.log(`converting ${input} to ${output}`);
  const converted = templateTSTemplate(readFile(input));
  fs.writeFileSync(output, converted);

  const testOutput = output.replace(/\.ts$/, '.spec.ts');
  console.log(`generating ${testOutput}`);
  fs.writeFileSync(testOutput, testTemplate(lang ?? 'default'));
}

console.log(`generating ${srcFolder}/index.ts`);

fs.writeFileSync(`${srcFolder}/index.ts`, indexTSTemplate(templates));
