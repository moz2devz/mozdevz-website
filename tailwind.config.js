const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.webp')",
        about: "url('/assets/mozdevz-about.webp')",
        header: "url('/assets/about-cover.webp')",
      },
      colors: {
        primary: "hsla(358, 75%, 55%, 1);"
      },
      fontFamily: {
        body: ['var(--font-hind)', ...fontFamily.sans],
        headings: ['var(--font-raleway)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
