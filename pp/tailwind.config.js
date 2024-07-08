module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myorange: {
          200: "#FF8A5C",
          300: "#E88D67",
          400: "#E88D67",
          500: "#FF7F3E",
          600: "#EB5E0B",
        },
        mywhite: {
          100: "#FCFFE7",
          200: "#AAAAAA",
        },
      },
      fontFamily: {
        wittgenstein: ["Wittgenstein", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
