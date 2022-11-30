/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        brand: "#a3be8c",
      },
      spacing: {
        section: "96vh",
      },
    },
  },
  plugins: [],
};
