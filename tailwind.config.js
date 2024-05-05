/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      "very-dark-blue": "hsl(200deg 15% 8% / <alpha-value>)",
      "dark-blue": "hsl(209deg 23% 22% / <alpha-value>)",
      "dark-gray": "hsl(0deg 0% 52% / <alpha-value>)",
      "very-dark-blue": "hsl(207deg 26% 17% / <alpha-value>)",
      "very-light-gray": "hsl(0deg 0% 98% / <alpha-value>)",
    },
  },
  plugins: [],
};
