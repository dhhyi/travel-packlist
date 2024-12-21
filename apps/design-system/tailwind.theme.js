/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  colors: ({ colors }) => ({
    black: colors.black,
    gray: {
      100: colors.gray[100],
      300: colors.gray[300],
      500: colors.gray[500],
      700: colors.gray[700],
      900: colors.gray[900],
    },
    green: {
      light: colors.green[500],
      normal: colors.green[700],
    },
    red: {
      light: colors.red[500],
      normal: colors.red[700],
    },
    slate: {
      100: colors.slate[100],
      200: colors.slate[200],
      300: colors.slate[300],
      400: colors.slate[400],
      500: colors.slate[500],
      600: colors.slate[600],
      700: colors.slate[700],
      800: colors.slate[800],
      900: colors.slate[900],
    },
    transparent: colors.transparent,
    white: colors.white,
    yellow: {
      normal: colors.yellow[600],
    },
  }),
  extend: {
    keyframes: {
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.1 },
      },
    },
  },
  fontFamily: {
    mono: ['Courier New', 'monospace'],
  },
  fontSize: {
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    xl: ['1.5rem', { lineHeight: '2rem' }],
  },
  fontWeight: {
    bold: 700,
    normal: 400,
  },
  screens: {
    mobile: '600px',
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = { theme, darkMode: 'selector' };
