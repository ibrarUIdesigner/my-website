/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#38bdf8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [forms, containerQueries],
};
