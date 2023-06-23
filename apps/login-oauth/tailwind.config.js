// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
module.exports = {
  content: [
    '../../packages/ui-atomic-css/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,html}',
    '../../node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
  theme: {
    extend: {},
  },
};
