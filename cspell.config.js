"use strict";

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
  import: ["@cspell/dict-de-de/cspell-ext.json"],
  overrides: [
    {
      language: "de-de",
      filename: "**/*.de.{md,json,ts}",
    },
  ],
  words: ["TravelPacklist", "EBNF", "packlist"],
};

module.exports = cspell;
