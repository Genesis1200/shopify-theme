/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/*.js',
  ],
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};
