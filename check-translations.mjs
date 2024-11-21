import sortJson from "sort-json";
import { readFileSync, writeFileSync } from "fs";

const angularJson = JSON.parse(
  readFileSync("angular.json", { encoding: "utf-8" }),
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
    .outputPath + "/messages.json";

/** @type {{translations: Record<string, string> ; locale: string}} */
const translationsJson = JSON.parse(
  readFileSync(translationsPath, { encoding: "utf-8" }),
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
  ]),
);

const sorted = sortJson(trimmed);

writeFileSync(
  translationsPath,
  JSON.stringify({ ...translationsJson, translations: sorted }, null, 2) + "\n",
  { encoding: "utf-8" },
);

if (errors) {
  process.exit(1);
}
