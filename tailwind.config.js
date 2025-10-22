/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
      animation: {
  'pulse-slow': 'pulse 6s ease-in-out infinite',
},

    },
  },
  plugins: [],
};
