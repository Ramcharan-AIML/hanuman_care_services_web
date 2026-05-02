export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E67E22",
        cream: "#FFF8F2",
        dark: "#1F2937",
        muted: "#6B7280",
        green: "#27AE60",
        border: "#E5E7EB"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 41, 55, 0.08)",
        glow: "0 18px 55px rgba(230, 126, 34, 0.16)"
      }
    }
  },
  plugins: []
};
