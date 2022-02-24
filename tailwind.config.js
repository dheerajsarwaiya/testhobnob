module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/banner.webp')",
        "hero-pattern2": "url('/images/pexels-alex-andrews-821754.jpg')",
      },
    },
  },
  plugins: [],
};
