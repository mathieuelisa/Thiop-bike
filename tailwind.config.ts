import type { Config } from "tailwindcss";

const colors = require("./config/tailwind/colors.tailwind.js");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      laptopl: "1280px",
      laptopxl: "1440px",
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
    },
    colors,
  },
  plugins: [],
};
export default config;
