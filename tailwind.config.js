module.exports = {
  mode: 'jit',
  purge: ['./public/.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    inset: {
      '2/5': '43%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
