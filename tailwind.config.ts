import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B1E1C',
          'red-dark': '#6e1716',
          gold: '#B8892F',
          'gold-light': '#FFD76F',
          cream: '#F6F1E8',
          ivory: '#FBF7F0',
          black: '#0D0A09',
          'near-black': '#1A1210',
          'text-dark': '#2D1A14',
          'text-mid': '#5C4638',
          'text-muted': '#9C7B6B',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
