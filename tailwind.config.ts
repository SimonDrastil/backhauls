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
          DEFAULT: '#0B3C8A',
          dark: '#072B63',
          light: '#1552A2'
        },
        accent: {
          DEFAULT: '#2FB24C',
          dark: '#1F7F35',
          light: '#54D66C'
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
