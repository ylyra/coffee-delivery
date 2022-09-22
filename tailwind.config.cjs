/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      cursive: ["'Baloo 2'", "cursive"],
    },
    extend: {
      backgroundImage: {
        "background-blur": "url('/background.webp')",
      },
      colors: {
        white: {
          300: "#D7D5D5",
          400: "#E6E5E5",
          500: "#EEEDED",
          700: "#F3F2F2",
          800: "#FAFAFA",
          900: "#ffffff",
        },
        black: {
          200: "#8D8686",
          400: "#574F4D",
          600: "#403937",
          900: "#272221",
        },
        purple: {
          50: "#EBE5F9",
          500: "#8047F8",
          900: "#4B2995",
        },
        yellow: {
          50: "#F1E9C9",
          500: "#DBAC2C",
          900: "#C47F17",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
