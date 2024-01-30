import Color from "color";
import type { Config } from "tailwindcss";

const alpha = (clr: string, val: number) =>
  Color(clr).alpha(val).rgb().string();
const lighten = (clr: string, val: number) =>
  Color(clr).lighten(val).rgb().string();
const darken = (clr: string, val: number) =>
  Color(clr).darken(val).rgb().string();

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
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gold: "#F2A900",
        harvard: {
          DEFAULT: "#A6192E",
          light: lighten("#A6192E", 0.3),
          dark: darken("#A6192E", 0.3),
          "75": alpha("#A6192E", 0.75),
        },
        grey: {
          DEFAULT: "#5B6770",
          light: lighten("#5B6770", 0.2),
          dark: darken("#5B6770", 0.6),
          "75": alpha("#5B6770", 0.75),
        },
      },
    },
  },
  plugins: [],
};
export default config;
