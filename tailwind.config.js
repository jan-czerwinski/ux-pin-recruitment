module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },

    extend: {
      colors: {
        "custom-yellow-gold": "#FFE200",
        "custom-orchid-dark": "#741A8B",
        "custom-grey": "#3F3F3F",
        "custom-grey-light": "#707070",
        "custom-blue": "#3BA9FB",
        "custom-blue-dark": "#148AF1",
      },
      height: {
        "bg-image": "988px",
      },
      maxWidth: {
        "bg-image": "2880px",
      },
      padding: {
        "bg-aspect-ratio": "34%",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover"], animation: ["hover"] },
  },
  plugins: [],
};
