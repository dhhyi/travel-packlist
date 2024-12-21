/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/travel-packlist/src/**/!(*.stories|*.spec).{ts,html}',
    'libs/**/src/**/!(*.stories|*.spec).{ts,html}',
  ],
  presets: [require('../design-system/tailwind.theme')],
};
