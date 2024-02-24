import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['var(--font-arimo)'],
        cormorant: ['var(--font-cormorant)'],
      },
      colors: {
        warning: 'white',
        landingPrimary: '#434C26',
      },
      height: {
        screen: '100vh',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'in-reverse': {
          '0%': { transform: 'translateY(-18px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale3d(.3,.3,.3)', opacity: '0' },
          '50%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translate3d(0,100%,0)', opacity: '0' },
          '50%': { transform: 'none', opacity: '1' },
        },
        'fade-in-left': {
          '0%': { transform: 'translate3d(-100%,0,0)', opacity: '0.6' },
          '50%': { transform: 'none', opacity: '1' },
        },
        'fade-in-right': {
          '0%': { transform: 'translate3d(100%,0,0)', opacity: '0.6' },
          '50%': { transform: 'none', opacity: '1' },
        },
        'slide-bottom': {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
      animation: {
        in: 'in .6s both',
        'in-reverse': 'in-reverse .6s both',
        'fade-in': 'fade-in 2s both',
        'zoom-in': 'zoom-in 2s both',
        'fade-in-up': 'fade-in-up 2s both',
        'fade-in-left': 'fade-in-left 2s both',
        'fade-in-right': 'fade-in-right 2s both',
        'slide-bottom': 'slide-bottom 1s both',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#0A090C',
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#71717A',
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
}
export default config
