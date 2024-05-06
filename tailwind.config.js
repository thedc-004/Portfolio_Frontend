/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#747264",
      },
      padding: {
        "25vw": "24vw",
        "10vh": "10vh",
      },
      margin: {
        15: "5rem",
      },
    },
  },
  plugins: [],
};
