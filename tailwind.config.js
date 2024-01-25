/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-c': 'hsl(75, 94%, 57%)',
        'off-black': 'hsl(0, 0%, 8%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        grey: 'hsl(0, 0%, 20%)',
      },
    },
  },
  plugins: [],
}
