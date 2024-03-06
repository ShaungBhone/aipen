const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / 1)',
      secondary: 'rgb(var(--color-secondary) / 1)',
      indigo: 'rgb(var(--color-indigo) / 1)',
      white: 'rgb(var(--color-white) / 1)',
      gray: 'rgb(var(--color-gray) / 1)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '7rem',
        '2xl': '8rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
