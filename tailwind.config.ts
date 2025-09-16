import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F44336',
          dark: '#B71C1C'
        }
      },
      boxShadow: {
        map: '0px 10px 50px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
