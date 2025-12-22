/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        audax: {
          gold: "#C8A15A",
          charcoal: "#1F2A33",
          cream: "#F7F5F2",
          red: "#F33D3D",
        },
      },
      boxShadow: {
        header: "0 4px 12px rgba(0,0,0,0.08)",
        soft: "0 2px 6px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
