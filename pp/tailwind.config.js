module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myorange: {
          200: "#E68369",
          300: "#E88D67",
          400: "#E88D67",
          500: "#FF7F3E",
          600: "#EB5E0B",
        },
        mywhite: {
          100: "#F6F5F2",
          200: "#F0F0E4",
          300: "#CCD3CA",
          400: "#727272",
          500: "#CFD2CF",
        },
        theme1: {
          100: "#FBF3D5",
        },
      },
      fontFamily: {
        wittgenstein: ["Wittgenstein", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        redHat: ["Red Hat Display", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
