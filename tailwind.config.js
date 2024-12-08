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
      mobile: "600px",
    },
    colors: ({ colors }) => ({
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      slate: colors.slate,
      gray: {
        100: colors.gray[100],
        300: colors.gray[300],
        500: colors.gray[500],
        700: colors.gray[700],
        900: colors.gray[900],
      },
      red: {
        normal: colors.red[700],
        light: colors.red[500],
      },
      green: {
        normal: colors.green[700],
        light: colors.green[500],
      },
      yellow: {
        normal: colors.yellow[600],
      },
    }),
    fontSize: {
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.5rem", { lineHeight: "2rem" }],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontFamily: {
      mono: ["Courier New", "monospace"],
    },
    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      4: "1rem",
      6: "1.5rem",
      8: "2rem",
      12: "3rem",
    },
  },
};
