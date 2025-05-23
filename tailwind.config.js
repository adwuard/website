/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,css}'],
  prefix: 'tw-',
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#10a6fa',
          'primary-content': '#ffffff',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#10a6fa',
        },
      },
    ],
  },
}
