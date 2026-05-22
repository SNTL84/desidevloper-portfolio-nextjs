import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e8c97a',
        'gold-dark': '#a07830',
        dark: '#0a0a0a',
        'dark-2': '#111111',
        'dark-3': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #a07830 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
