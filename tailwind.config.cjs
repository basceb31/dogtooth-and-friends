/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#00ff88',
          secondary: '#8a2be2',
          zinc: {
            900: '#18181b',
            800: '#27272a',
            700: '#3f3f46'
          }
        }
      }
    },
    plugins: []
  };