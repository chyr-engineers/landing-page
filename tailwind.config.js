module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow
        secondary: '#000000', // Black
        accent: '#1E90FF', // Blue
      },
    },
  },
  variants: {},
  plugins: [],
};
