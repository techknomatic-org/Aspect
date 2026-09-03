/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aspect Midnight Dark Navy & Red Theme (as shown in reference screenshot)
        'primary-navy': '#0B1426',
        'secondary-navy': '#172033',
        'aspect-midnight': '#0B1426',
        'aspect-card': '#172033',
        'aspect-card-hover': '#1E293B',
        'aspect-red': '#E61C40',
        'aspect-crimson': '#D60132',
        'aspect-gold': '#C9A227',
        'aspect-teal': '#0E7C7B',
        'aspect-slate': '#4A6FA5',
        'light-surface': '#EEF1F8',
        'body-text': '#1F2937',
        'muted-text': '#94A3B8',

        // System Compatibility Mappings
        navy: {
          950: '#070D1A',
          900: '#0B1426',
          850: '#172033',
          800: '#172033',
          700: 'rgba(255, 255, 255, 0.08)',
          600: '#1E293B',
          500: '#334155',
          400: '#94A3B8',
        },
        brand: {
          gold: '#C9A227',
          red: '#E61C40',
          crimson: '#D60132',
          positive: '#0E7C7B',
          warning: '#C9A227',
          critical: '#E61C40',
          blue: '#4A6FA5',
          bg: '#0B1426',
          card: '#172033',
          cardHover: '#1E293B',
          textPrimary: '#FFFFFF',
          textSecondary: '#94A3B8',
          textMuted: '#64748B',
        },
        gold: {
          DEFAULT: '#C9A227',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#B59020',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'executive': '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
        'executive-hover': '0 12px 36px -4px rgba(230, 28, 64, 0.2)',
      }
    },
  },
  plugins: [],
}
