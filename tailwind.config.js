/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    fontFamily: {
      'lamode': ['Raleway', 'sans-serif'],
      'chiquita': ['Rye', 'cursive'],
      'chalk': ['Fredericka the Great', "cursive"]
    },
    extend: {
      backgroundImage: {
        'chalkboard': "url('chalkboard.png')"
      }
    },
  },
  plugins: [],
}
