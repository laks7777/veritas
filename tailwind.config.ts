import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#0d0d0d",
          100: "#141414",
          200: "#1a1a1a",
          300: "#242424",
        },
        crimson: {
          DEFAULT: "#c5221f",
          dark: "#8a1412",
          light: "#e0312e",
          subtle: "rgba(197, 34, 31, 0.12)",
        },
        muted: {
          DEFAULT: "#737373",
          light: "#a3a3a3",
          dark: "#404040",
        },
        // Keep cyber aliases mapped to editorial palette to avoid breaking anything
        cyber: {
          black: "#000000",
          dark: "#050505",
          panel: "#0d0d0d",
          border: "#1f1f1f",
          green: "#e5e5e5",
          "green-dim": "#a3a3a3",
          cyan: "#d4d4d4",
          "cyan-dim": "#737373",
          red: "#c5221f",
          yellow: "#a3a3a3",
          gray: "#737373",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;