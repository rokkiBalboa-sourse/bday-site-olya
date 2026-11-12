import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Кастомная палитра для праздничной темы и Корги
        corgi: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Корги рыжий / тёплый amber
          600: '#d97706',
          700: '#b45309',
        },
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          400: '#fb7185',
          500: '#ff6b6b', // Праздничный коралловый
          600: '#e11d48',
        },
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ebd98', // Освежающий мятный
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'kumo': '0 10px 30px -10px rgba(245, 158, 11, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'kumo-lg': '0 20px 40px -15px rgba(255, 107, 107, 0.2), 0 8px 24px -4px rgba(0, 0, 0, 0.08)',
        'ticket': '0 25px 50px -12px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'bounce-gentle': 'bounceGentle 3s infinite ease-in-out',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
