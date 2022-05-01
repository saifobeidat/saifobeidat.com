module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Radio: ["Radio Canada", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ]
}