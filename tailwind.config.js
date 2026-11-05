export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#121417', soft: '#1c1f23', line: '#2c3036' },
        paper: { DEFAULT: '#f3f2ee', deep: '#e8e6df' },
        line: '#d6d3ca',
        muted: '#5d6168',
        brand: { DEFAULT: '#0094d4', dark: '#0076aa', light: '#d9eef8' },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
