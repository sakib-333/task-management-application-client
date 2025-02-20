/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#2e2e2e",
        background: "#f0ede9",
        primary: "#38bdf8",
        secondary: "#38ccf9",
      },
    },
  },
  plugins: [require("daisyui")],
};
