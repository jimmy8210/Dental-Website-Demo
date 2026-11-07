/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          bg: '#f8fafc',
          surface: '#ffffff',
          surfaceSubtle: '#f1f5f9',
          ink: '#0f172a',
          inkMuted: '#475569',
          primary: '#0d9488',
          primaryHover: '#0f766e',
          accent: '#06b6d4',
          accentLight: '#ecfeff',
          teal: '#14b8a6',
          emerald: '#10b981',
          dark: '#0a0f1d',
          darkSurface: '#111827',
          darkMuted: '#94a3b8',
          border: '#e2e8f0',
          borderDark: '#1e293b'
        },
        brand: {
          whatsapp: '#25D366',
          whatsappHover: '#20ba59',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 40px -4px rgba(13, 148, 136, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 35px -5px rgba(13, 148, 136, 0.25)',
      },
      borderRadius: {
        'specimen': '16px',
        'tile': '24px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
