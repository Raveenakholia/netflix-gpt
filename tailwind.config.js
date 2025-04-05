/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#292626',
      },
      backgroundImage: {
        Netflix_Background_img: "url('./media/Netflix_Background_img.jpg')",
      },
    },
  },
  plugins: [],
};
