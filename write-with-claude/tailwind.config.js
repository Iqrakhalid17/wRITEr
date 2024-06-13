/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
      },
      fontSize: {
        sm: ["13px", "20px"],
        base: ["15px", "20px"],
        lg: ["17px", "20px"],
        xl: ["19px", "20px"],
      },
      height: {
        screen: "100svh",
      },
      animation: {
        fade: "fadeOut 1.87s ease-in-out",
      },
      keyframes: (_) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
    fontFamily: {
      Lexendg: ["Lexend Giga", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
      Inter: ['Inter'],
      LexendDeca: ["Lexend Deca"]
    },
  },
  plugins: [],
};
