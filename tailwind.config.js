/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/*.{html,js,ts,jsx,tsx}",
    "./*.{html,js,ts,jsx,tsx}",
  ],

  daisyui: {
    theme: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
