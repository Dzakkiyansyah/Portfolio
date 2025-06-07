/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-background': '#F9FAFB',
        'light-text': '#1F2937',
        'light-card': '#FFFFFF',
        'dark-background': '#111827',
        'dark-text': '#F9FAFB',
        'dark-card': '#1F2937',
        'primary': '#3B82F6',
        'subtle': '#6B7280',
        'subtle-dark': '#9CA3AF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}