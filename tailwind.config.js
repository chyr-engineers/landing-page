module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Sunflower
        secondary: '#1E3A8A', // Dark Blue
        accent: '#F3F4F6', // Light Gray
      },
    },
  },
  variants: {},
  plugins: [],
};
