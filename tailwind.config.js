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
  },
};
