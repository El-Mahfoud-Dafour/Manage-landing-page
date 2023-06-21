/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      special: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        scaleDown: {
          "0%": { scale: "1", opacity: "1" },
          "100%": { scale: "0.2", opacity: "0" },
        },
        scaleUp: {
          "0%": { scale: "0.2", opacity: "0" },
          "100%": { scale: "1", opacity: "1" },
        },
      },
      animation: {
        makeNavSmaller: "scaleDown 500ms ease-in-out",
        makeNavBigger: "scaleUp 500ms ease-in-out  ",
      },

      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGreyishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        varyLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
