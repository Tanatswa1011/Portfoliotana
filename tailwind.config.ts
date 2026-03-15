import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        accent: {
          DEFAULT: "#0b1f4f",
          light: "#e9eef8"
        }
      },
      boxShadow: {
        card: "0 16px 40px -22px rgba(13, 25, 60, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
