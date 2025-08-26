/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryColor: '#035247',
        secondaryColor: '#D7F7F2',
        textPrimaryColor: '#555555',
        accentColor: '#07A58E'
      }
    },
  },
  plugins: [],
}

