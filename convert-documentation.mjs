// @ts-check

import showdown from "showdown";
import fs from "fs";

/**
 * Documents to be converted to markdown
 * @type {Record<string, string>}
 */
const documents = {
  "src/doc/documentation.md":
    "src/app/pages/documentation/documentation.component.html",
  "src/doc/documentation.de.md":
    "src/app/pages/documentation/documentation.component.de.html",
};

/**
 * Languages to be supported
 * @type {string[]}
 */
const languages = ["de"];

/**
 * Components that have to be copied handling localized templates
 *
 * @typedef {((content: string, lang: string) => string)} Replacer
 *
 * @type {Record<string, { languages: string[]; replacers: Replacer[]  }>}
 */
const components = {
  "src/app/pages/documentation/documentation.component.ts": {
    languages,
    replacers: [
      (content, lang) =>
        content.replace(
          /templateUrl:\s(["'])(.+?)["'],/,
          (_, quot, url) =>
            `templateUrl: ${quot}${url.replace(/\.html$/, `.${lang}.html`)}${quot},`,
        ),
    ],
  },
};

/**
 * @param {string} input
 * @param {string} output
 * @returns {void}
 */
function convertMarkdown(input, output) {
  const converter = new showdown.Converter();

  const markdown = fs.readFileSync(input, { encoding: "utf-8" });
  const html = converter.makeHtml(markdown);

  const header = "<!-- eslint-disable @angular-eslint/template/i18n -->";

  console.log("generating", output);
  fs.writeFileSync(output, header + "\n\n" + html);
}

/**
 * @param {string} file
 * @param {string[]} languages
 * @param {Replacer[]} replacers
 * @returns {void}
 */
function copyLocalizedComponent(file, languages, replacers) {
  let content = fs.readFileSync(file, { encoding: "utf-8" });

  for (const lang of languages) {
    const output = replacers.reduce(
      (content, replacer) => replacer(content, lang),
      content,
    );

    const fileExtension = file.split(".").pop();
    const localizedFile = file.replace(
      `.${fileExtension}`,
      `.${lang}.${fileExtension}`,
    );
    console.log("generating", localizedFile);
    fs.writeFileSync(localizedFile, output, { encoding: "utf-8" });
  }
}

for (const [input, output] of Object.entries(documents)) {
  convertMarkdown(input, output);
}

for (const [input, config] of Object.entries(components)) {
  copyLocalizedComponent(input, config.languages, config.replacers);
}
