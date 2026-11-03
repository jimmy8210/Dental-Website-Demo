/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0D9488',
          tealDark: '#0F766E',
          tealDeep: '#115E59',
          mint: '#F0FDFA',
          mintBorder: '#CCFBF1',
          navy: '#0F172A',
          navyMuted: '#1E293B',
          whatsapp: '#25D366',
          whatsappHover: '#1EBE5D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-teal': '0 10px 25px -5px rgba(13, 148, 136, 0.12), 0 8px 10px -6px rgba(13, 148, 136, 0.08)',
        'elevated': '0 20px 30px -10px rgba(15, 23, 42, 0.08), 0 10px 15px -5px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}

