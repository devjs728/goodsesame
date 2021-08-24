module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "yellow-1": "#FFC43D",
        "gray-1": "#696864",
        "gray-2": "#62615e",
        "gray-150": "#F0EFED",
        "gray-350": "#D4D2CD",
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
        "pink-3": "#E53553",
        "pink-4": "#EB5757",
        "pink-5": "#e25353",
        "purple-1": "#9B51E0",
        "purple-2": "#5865F2",
        "orange-1": "#F2994A",
        "orange-2": "#ed9648",
        "green-1": "#27AE60",
        "green-2": "#24a259",
        "blue-1": "#4285F4",
        "blue-2": "#1DA1F2",
        "blue-3": "#157DC3",
        "black-1": "#201E1A",
      }),
      spacing: {
        13: "3.438rem",
        34: "8.375rem",
        104: "32.125rem",
        940: "58.75rem",
      },
      height: {
        1.2: "0.313rem",
      },
      textColor: {
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
        "pink-3": "#E53553",
        "pink-4": "#EB5757",
        "pink-5": "#e25353",
        "gray-1": "#696864",
        "gray-2": "#2D2922",
        "gray-350": "#D4D2CD",
        "purple-1": "#9B51E0",
        "purple-2": "#5865F2",
        "orange-1": "#F2994A",
        "orange-2": "#ed9648",
        "green-1": "#27AE60",
        "green-2": "#24a259",
        "blue-1": "#4285F4",
        "blue-2": "#1DA1F2",
        "blue-3": "#157DC3",
        "black-1": "#201E1A",
      },
      ringColor: {
        "pink-1": "#F34160",
        "pink-2": "#FF4160",
        "pink-3": "#E53553",
        "pink-4": "#EB5757",
        "pink-5": "#e25353",
        "gray-1": "#696864",
        "gray-2": "#62615e",
        "purple-1": "#9B51E0",
        "purple-2": "#5865F2",
        "orange-1": "#F2994A",
        "orange-2": "#ed9648",
        "green-1": "#27AE60",
        "green-2": "#24a259",
        "blue-1": "#4285F4",
        "blue-2": "#1DA1F2",
        "blue-3": "#157DC3",
        "black-1": "#201E1A",
      },
      maxWidth: {
        26: "26rem",
      },
      fontSize: {
        "2.5xl": "1.625rem",
      },
      backgroundOpacity: {
        15: "0.15",
      },
      width: {
        512: "32rem",
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
