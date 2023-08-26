/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#4D6443",
        "ui-black": "#1E1E1E",
        "ui-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
