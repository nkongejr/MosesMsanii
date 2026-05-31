// tailwind.config.ts
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
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dark: "#9a7a2e",
        },
        beige: "#f5f0e8",
        charcoal: "#1a1a1a",
        dark: "#0d0d0d",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s infinite",
        shimmer: "shimmer 4s linear infinite",
        grain: "grain 0.5s steps(1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(201, 168, 76, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "90%": { transform: "translate(-2%, 1%)" },
        },
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #c9a84c, #e8c97a, #9a7a2e)",
        "gradient-dark":
          "linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(201, 168, 76, 0.3), 0 0 40px rgba(201, 168, 76, 0.1)",
        "gold-lg":
          "0 0 40px rgba(201, 168, 76, 0.4), 0 0 80px rgba(201, 168, 76, 0.2)",
        "glass":
          "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;