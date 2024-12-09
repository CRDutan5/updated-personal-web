/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#bg-gradient-to-br from-indigo-900 to-blue-900",
        accent: "#21345E",
        main: "#edf0f2",
        strongblue: "#1E3163",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
