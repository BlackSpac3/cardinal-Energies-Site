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
        "newsletter-subscribe": "url('/subscribe_section_bg.png')",
      },
      colors: {
        primary: "#2fae60",
      },
      screens: {
        phone: { max: "640px" },
        tab: { max: "980px" },
        "tab-s": { max: "700px" },
        "phone-s": { max: "380px" },
      },
      margin: {
        hero: "5vw",
        body: "7vw",
      },
    },
  },
  plugins: [],
};
