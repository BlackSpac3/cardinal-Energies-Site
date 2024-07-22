/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Montserrat"],
      },
      backgroundImage: {
        header: "url('/header_img.png')",
      },
      colors: {
        primary: "#2fae60",
      },
      screens: {
        phone: { max: "640px" },
        tab: { max: "1080px" },
        "tab-s": { max: "850px" },
        "phone-s": { max: "450px" },
      },
    },
  },
  plugins: [],
};