/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primaryBg: "#FFFFFF",
          secondaryBg: "#F7B2B6",
          primaryText: "#000000",
          accent: "#FF3B30",
        },
        dark: {
          primaryBg: "#121212",
          secondaryBg: "#1E1E1E",
          primaryText: "#FFFFFF",
          accent: "#FF3B30",
        },
      },
    },
  },
  plugins: [],
};
