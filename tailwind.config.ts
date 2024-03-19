import type { Config } from "tailwindcss";

const colors = require("./config/tailwind/colors.tailwind.js");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      matisan: ["var(--font-matisan)"],
      abril: ["var(--font-abril)"],
      yeseva: ["var(--font-yeseva)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
    },
    screens: {
      laptopl: "1280px",
      laptopxl: "1440px",
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
    },
    // colors,
    // backgroundImage: {
    //   test: "url('/assets/images/excursions/djiffer.jpeg')",
    //   // "footer-texture": "url('/img/footer-texture.png')",
    // },
  },
  plugins: [],
};
export default config;
