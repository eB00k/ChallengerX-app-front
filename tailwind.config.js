/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0D1117",
        "dark-secondary": "#161B22",
        "main-clr": "#4A77FF",
        "border-clr": "#1F2937",
        "dark-content": "#242C38",
        "box-25": "#3453B3",
        "box-50": "#3F65D9",
        "box-75": "#537EFF",
        "box-100": "#6E92FF",
      },
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
