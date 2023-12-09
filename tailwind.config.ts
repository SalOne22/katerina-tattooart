import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
        xl: '5rem',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        'alt-background': 'hsl(var(--alt-background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['var(--raleway)'],
      },
    },
  },
  plugins: [],
};
export default config;
