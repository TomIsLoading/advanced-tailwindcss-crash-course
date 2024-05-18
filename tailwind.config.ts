import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#f5302a",
        base: {
          100: "#f5f2f2",
          200: "#e6e1e1",
          // ... etc
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
