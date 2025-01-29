/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aidn': {
          green: 'var(--aidn-green)',
          blue: 'var(--aidn-blue)',
          yellow: 'var(--aidn-yellow)',
        },
      },
    },
  },
  plugins: [],
}