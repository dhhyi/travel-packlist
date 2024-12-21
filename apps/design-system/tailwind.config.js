/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{apps,libs}/**/src/**/!(*.stories|*.spec).{ts,html}'],
  presets: [require('./tailwind.theme')],
};
