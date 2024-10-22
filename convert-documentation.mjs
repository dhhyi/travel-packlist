import showdown from "showdown";
import fs from "fs";

const documents = {
  "src/doc/documentation.md":
    "src/app/rules/documentation/documentation.component.html",
  "src/doc/documentation.de.md":
    "src/app/rules/documentation/documentation.component.de.html",
};

/**
 * @param {string} input
 * @param {string} output
 * @returns {void}
 */
function convert(input, output) {
  const converter = new showdown.Converter();

  const markdown = fs.readFileSync(input, { encoding: "utf-8" });
  const html = converter.makeHtml(markdown);

  const header = "<!-- eslint-disable @angular-eslint/template/i18n -->";

  fs.writeFileSync(output, header + "\n\n" + html);
}

for (const [input, output] of Object.entries(documents)) {
  convert(input, output);
}
