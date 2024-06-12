/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layout/**/*.liquid',
    './src/templates/**/*.liquid',
    './src/sections/**/*.liquid',
    './src/snippets/**/*.liquid',
    './src/assets/*.js',
  ],
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};
