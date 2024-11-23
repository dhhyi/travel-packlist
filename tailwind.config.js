const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.1 },
        },
      },
    },
    screens: {
      sm: "600px",
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "var(--html-font-size)" }, //this font size should come from API
      });
    }),
  ],
};
