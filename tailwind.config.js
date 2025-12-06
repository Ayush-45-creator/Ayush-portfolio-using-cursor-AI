/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryStart: "#7c3aed",
        primaryEnd: "#ff6fb5",
        cardShade: "rgba(255,255,255,0.15)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16,24,40,0.06)",
        glow: "0 10px 30px rgba(124,58,237,0.12)"
      }
    }
  },
  plugins: []
};
