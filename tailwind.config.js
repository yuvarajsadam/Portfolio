/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#4f46e5', // Indigo-600
        'accent-hover': '#4338ca',
        'text-main': '#1f2937',
        'text-secondary': '#4b5563',
        'bg-color': '#ffffff',
        'card-bg': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
