/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      // Brand palette taken from the Kwach Computers flyer.
      // Change these values to re-theme the whole site.
      colors: {
        navy: {
          950: '#020818',
          900: '#050f27',
          800: '#0a1b3f',
          700: '#0f2a5c',
          600: '#163a7a',
        },
        brand: {
          50: '#eaf7ff',
          100: '#d0eeff',
          200: '#a6e0ff',
          300: '#6ccdfd',
          400: '#2ab7f6',
          500: '#03a6f1',
          600: '#0287cc',
          700: '#056ba3',
        },
        royal: {
          400: '#4d5ef5',
          500: '#2a3ff0',
          600: '#1d2fd8',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1da851',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(2, 8, 24, 0.04), 0 8px 24px -12px rgba(2, 8, 24, 0.12)',
        lift: '0 2px 4px rgba(2, 8, 24, 0.06), 0 20px 40px -16px rgba(2, 8, 24, 0.22)',
        glow: '0 0 0 1px rgba(3, 166, 241, 0.25), 0 20px 60px -20px rgba(3, 166, 241, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
