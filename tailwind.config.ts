import type { Config } from "tailwindcss";

// In Tailwind v4, theme config moves to globals.css @theme {}
// This file is kept for content paths only
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
