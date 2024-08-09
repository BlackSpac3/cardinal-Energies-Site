/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2fae60",
      },
      screens: {
        tab: { max: "1080px" },
        "tab-m": { max: "900px" },
        "tab-s": { max: "700px" },
        phone: { max: "640px" },
        "phone-s": { max: "380px" },
        portrait: {
          raw: "(orientation: portrait)",
        },
      },
    },
  },
  plugins: [],
};
