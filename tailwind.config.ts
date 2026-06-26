import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080808",
          surface: "#111111",
          elevated: "#1a1a1a",
        },
        border: {
          DEFAULT: "#242424",
          subtle: "#1a1a1a",
          highlight: "#3a3a3a",
        },
        text: {
          primary: "#f2f2f2",
          secondary: "#888888",
          muted: "#444444",
        },
        accent: {
          DEFAULT: "#c8ff00",
          dim: "rgba(200, 255, 0, 0.12)",
          border: "rgba(200, 255, 0, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
        container: "clamp(1.5rem, 5vw, 4rem)",
      },
      animation: {
        "pulse-accent": "pulse-accent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ticker": "ticker 30s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "pulse-accent": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
