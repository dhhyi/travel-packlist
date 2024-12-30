'use strict';

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
  import: ['@cspell/dict-de-de/cspell-ext.json'],
  overrides: [
    {
      filename: '**/*.de.{md,json,ts}',
      language: 'de-de',
    },
  ],
  words: ['TravelPacklist', 'packlist'],
};

module.exports = cspell;
