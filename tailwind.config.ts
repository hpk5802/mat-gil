import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'brand-background': '#141414',
        'brand-background-opacity': 'rgba(20,20,20,0.9)',
        'card-background': '#333333',
        'active-bg': '#ffffff',
        'active-text': '#141414',
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '3rem' }], // 40px / 48px
        '3xl': ['2rem', { lineHeight: '2.375rem' }], // 32px / 38px
        '2xl': ['1.5rem', { lineHeight: '1.75rem' }], // 24px / 28px
        xl: ['1.25rem', { lineHeight: '1.5rem' }], // 20px / 24px
        '2lg': ['1.125rem', { lineHeight: '1.3125rem' }], // 18px / 21px
        lg: ['1rem', { lineHeight: '1.1875rem' }], // 16px / 19px
        md: ['0.875rem', { lineHeight: '1.0625rem' }], // 14px / 17px
        sm: ['0.8125rem', { lineHeight: '1rem' }], // 13px / 16px
        xs: ['0.75rem', { lineHeight: '0.875rem' }], // 12px / 14px
      },
      boxShadow: {
        card: '0.25rem 0.25rem 0.375rem rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
