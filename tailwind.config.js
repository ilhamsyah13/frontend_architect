/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./assets/**/*.{html,jsx}"],
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
