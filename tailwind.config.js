/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        2: "1.5fr 4fr",
        3: "380px 1fr",
      },
      // margin: {
      //   "5px": "5px",
      // },
    },
  },
  plugins: [],
};
