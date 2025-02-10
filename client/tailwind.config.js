/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3b4e63",
        "custom-gray": "#575757",
      },
    },
  },
  plugins: [],
};
