import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import sortJson from "sort-json";

/**
 * @typedef {{translations: Record<string, string> ; locale: string}} Translations
 */

const angularJson = JSON.parse(
  readFileSync("angular.json", { encoding: "utf-8" })
);

if (
  !angularJson.projects["travel-packlist"].architect["extract-i18n"].options
    .format === "json"
) {
  console.error("The format of the translations file is not JSON");
  process.exit(1);
}

const translationsPath =
  angularJson.projects["travel-packlist"].architect["extract-i18n"].options
    .outputPath;

/** @type {Translations} */
const translationsJson = JSON.parse(
  readFileSync(translationsPath + "/messages.json", { encoding: "utf-8" })
);

let errors = false;
Object.keys(translationsJson.translations).forEach((key) => {
  if (!/^[a-z][a-z0-9.-]*[a-z0-9]$/.test(key)) {
    console.warn(`Key "${key}" is not snake case`);
    errors = true;
  }
});

const trimmed = Object.fromEntries(
  Object.entries(translationsJson.translations).map(([key, value]) => [
    key.trim(),
    value.trim(),
  ])
);

const sorted = sortJson(trimmed);

writeFileSync(
  translationsPath + "/messages.json",
  JSON.stringify({ ...translationsJson, translations: sorted }, null, 2) + "\n",
  { encoding: "utf-8" }
);

const keys = Object.keys(translationsJson.translations);

readdirSync(translationsPath).forEach((file) => {
  if (file === "messages.json") {
    return;
  } else if (statSync(translationsPath + "/" + file).isDirectory()) {
    return;
  } else if (!file.endsWith(".json")) {
    return;
  } else {
    /** @type {Translations} */
    const fileContent = JSON.parse(
      readFileSync(translationsPath + "/" + file, { encoding: "utf-8" })
    );
    const newTranslations = Object.fromEntries(
      Object.entries(fileContent.translations).filter(([key]) => {
        if (!keys.includes(key)) {
          console.warn(
            `Key "${key}" is present in '${file}' but not present in the main translations file`
          );
          errors = true;
          return false;
        }
        return true;
      })
    );
    const newFileContent = { ...fileContent, translations: newTranslations };
    writeFileSync(
      translationsPath + "/" + file,
      JSON.stringify(newFileContent, null, 2) + "\n",
      { encoding: "utf-8" }
    );
  }
});

if (errors) {
  process.exit(1);
}
