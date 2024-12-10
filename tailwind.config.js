/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "7.5xl": "90rem",
      },
      colors: {
        // primary: "#bg-gradient-to-br from-indigo-900 to-blue-900",
        accent: "#21345E",
        main: "#edf0f2",
        strongblue: "#1E3163",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
