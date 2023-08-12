/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#545567",
        secondary: "#a78bfa"
      }
    },
    fontFamily: {
      sans: ["Tajawal", "sans-serif"]
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    }
  ]
};
