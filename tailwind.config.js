module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "yellow-1": "#FFC43D",
        "gray-150": "#F0EFED",
        "gray-350": "#D4D2CD",
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
      }),
      spacing: {
        34: "8.375rem",
        104: "32.125rem",
      },
      textColor: {
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
        "pink-3": "#E53553",
        "gray-1": "#696864",
        "gray-350": "#D4D2CD",
      },
      ringColor: {
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
      },
      maxWidth: {
        26: "26rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
