const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'Poppins'],
      'serif': ['ui-serif', 'Poppins'],
      'mono': ['ui-monospace', 'Poppins'],
      'poppins': ['"Poppins"', 'cursive']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5' }],
      sm: ['0.875rem', { lineHeight: '1.5715' }],
      base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
      lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
      '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
      '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
      '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
      '5xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.017em' }],
      '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
    },
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.4em',
    },
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#2564eb',
        primaryHover: '#0066ff',
        secondary: '#F18F01',
        secondaryHover: '#F59E0B',
        neutral: '#DFF3E4',
        dark: '#1e293b',
        darkSecondary: '#8A817C',
        heading: '#171738',
        body: '#111827',
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase }) {
      addBase({
        'html': { fontSize: "18px" },
      })
    })
  ],
};
