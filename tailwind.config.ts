import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E1E1E",
        canvas: "#F7F4EC",
        mist: "#DCE5D8",
        gold: "#6B8F71",
        gray: "#B8B1A6",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
