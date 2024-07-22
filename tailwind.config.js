/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'media' for system-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if necessary
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(var(--background))',
        'foreground': 'rgb(var(--foreground))',
      },
    },
  },
  plugins: [],
}
