import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        xxs: "300px",
        xs: "480px", // Custom small breakpoint
        mdsm: "1025px", // Custom breakpoint for 1025px
        lgsm: "1200px", // Custom breakpoint for 1200px
      },
    },
  },
  plugins: [],
} satisfies Config;
