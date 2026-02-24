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
        // Brand Colors
        primary: {
          DEFAULT: "#FF7B00",
          dark: "#E65C00",
        },
        secondary: {
          DEFAULT: "#1A1A2E",
        },
        accent: {
          DEFAULT: "#FFD700",
        },
        
        // Semantic Colors
        background: "#FAFAFA",
        foreground: "#2D2D2D",
        muted: "#6B7280",
        
        // UI Colors
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#FF7B00",
        
        // Card Colors
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2D2D",
        },
        
        // Destructive
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        body: ["var(--font-inter)"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "52px" }],
        "6xl": ["60px", { lineHeight: "64px" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 15s ease infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "whatsapp-pulse": "whatsapp-pulse 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "whatsapp-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
          "70%": { boxShadow: "0 0 0 20px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(255, 123, 0, 0.5)",
        "glow-lg": "0 0 40px rgba(255, 123, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
