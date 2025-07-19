/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- this is needed!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
