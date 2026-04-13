import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Nova Paleta Oficial ──────────────────────────
          wine:          '#7C2C3B',   // primária
          'wine-light':  '#F4E6E9',   // tinte claro
          'wine-pale':   '#FBF0F1',   // muito claro
          cream:         '#FCECBF',   // secundária
          'cream-light': '#FEF8E6',   // creme claro

          // ── Aliases de compatibilidade (→ nova paleta) ──
          blue:          '#7C2C3B',
          'blue-mid':    '#A84055',
          'blue-light':  '#F4E6E9',
          'blue-pale':   '#FBF0F1',
          teal:          '#7C2C3B',
          'teal-light':  '#FCECBF',
          'teal-pale':   '#FEF8E6',
          sage:          '#9E6050',
          'sage-light':  '#F7EDE9',
        },
        neutral: {
          50:  '#F8FAFB',
          100: '#F1F5F7',
          200: '#E2EAF0',
          300: '#C5D5DF',
          400: '#94A8B8',
          500: '#7A8FA0',
          600: '#64788A',
          700: '#4A5E6E',
          800: '#2D3F4E',
          900: '#1A2530',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',    'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease-out forwards',
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      boxShadow: {
        'soft':    '0 2px 20px rgba(124, 44, 59, 0.08)',
        'card':    '0 4px 24px rgba(124, 44, 59, 0.10)',
        'hover':   '0 8px 32px rgba(124, 44, 59, 0.18)',
        'section': '0 1px 0 rgba(124, 44, 59, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
