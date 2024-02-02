import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-whitney)"],
        title: ["var(--font-ginto)"],
      },
      colors: {
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#BOBBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#5C6067",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
        brand: "#5865F2",
      },
    },
  },
  plugins: [],
};
export default config;
