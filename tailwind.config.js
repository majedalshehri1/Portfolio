/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "900px", // قلل من 1024px
        xl: "900px",
        "2xl": "900px",
      },
    },
    extend: {
      colors: {
        bg: "#ffffff",
        ink: "#0a0a0a",
        mute: "#6b7280",
        card: "#f7f7f8",
        border: "#e9eaeb",
        accent: "#e8c36b",
        accent2: "#ff6a3d",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        Borel: ["Borel", "cursive"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 6vw, 6rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
      },
      shadow: { card: "0 1px 0 rgba(0,0,0,0.05), 0 2px 10px rgba(0,0,0,0.04)" },
      borderRadius: { xl: "1.25rem", "2xl": "2rem" },
    },
  },
  darkMode: "class",
  plugins: [],
};
