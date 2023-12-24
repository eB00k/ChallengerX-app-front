/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0D1117",
        "dark-secondary": "#161B22",
        "border-clr": "#1F2937",
        "main-clr": "#4A77FF",
        "main-clr-1": "#4a77ff",
        "main-clr-2": "#5c85ff",
        "main-clr-3": "#6e92ff",
        "main-clr-4": "#80a0ff",
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
