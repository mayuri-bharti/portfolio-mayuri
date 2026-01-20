export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#4b4696",
        light: "#5a55aa",
        accent: "#b8b4ff",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
