module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },

    extend: {
      fontSize: {
        "5xl": [
          "48px",
          {
            lineHeight: "54px",
            letterSpacing: "0px",
          },
        ],
      },
      colors: {
        "custom-yellow-gold": "#FFE200",
        "custom-orchid-dark": "#741A8B",
        "custom-grey": "#3F3F3F",
        "custom-grey-light": "#707070",
        "custom-blue-light": "#CEEAFD",
        "custom-blue": "#3BA9FB",
        "custom-blue-dark": "#148AF1",
      },
      gridTemplateColumns: {
        header: " auto minmax(0, 1fr) auto auto auto",
      },
      height: {
        "bg-image": "988px",
        "nav-bar": "59px",
        "header-button": "53px",
      },
      maxHeight: {
        "company-logo": "34px",
      },
      width: {
        logo: "26px",
      },

      maxWidth: {
        "bg-image": "2880px",
        "header-button": "200px",
      },
      padding: {
        "15px": "15px",
        "bg-aspect-ratio": "34%",
      },
      space: {
        "nav-bar-elements": "35px",
      },

      borderRadius: {
        base: "4px",
      },

      lineHeight: {
        "bullet-point-title": "65px",
      },
      letterSpacing: {
        "companies-title": "0.98px",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover"], animation: ["hover"] },
  },
  plugins: [],
};
