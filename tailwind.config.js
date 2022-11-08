/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00668A",
        "secondary": "#004E71",
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    }
  },
  plugins: [],
  corePlugins: {
    //preflight:false
  }
}
