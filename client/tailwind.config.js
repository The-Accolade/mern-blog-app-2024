// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#174694",
        secColor: "#934C9D",
        tertColor: "#DE5A8D",
        dark: "#444655",
        light: "#F1F1E6"
      },
      fontFamily: {
        mainFont: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

