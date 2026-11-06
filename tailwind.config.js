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
          bg: '#f7f9fa',
          surface: '#edf2f5',
          surfaceAlt: '#ffffff',
          ink: '#111d24',
          muted: '#42525d',
          accent: '#0a7b83',
          accentHover: '#08636a',
          accentLight: '#e6f3f2',
          dark: '#0c181e',
          darkSurface: '#132027',
          darkMuted: '#cbd5e1',
          border: '#dbe4e9'
        },
        brand: {
          teal: '#0a7b83',
          tealDark: '#08636a',
          navy: '#0c181e',
          whatsapp: '#25D366',
          whatsappHover: '#20ba59',
        }
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'specimen': '14px',
        'tile': '18px',
      }
    },
  },
  plugins: [],
}
