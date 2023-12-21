/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "240px 1fr",
      },
      gridTemplateRows: {
        layout: "60px 1fr",
      },

      gridTemplateAreas: {
        layout: ["sidebar navbar", "sidebar main"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
