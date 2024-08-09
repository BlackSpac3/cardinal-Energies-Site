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
        "section-bg-1": "url('/section_bg1.png')",
      },
      colors: {
        primary: "#2fae60",
      },
      screens: {
        tab: { max: "1080px" },
        "tab-m": { max: "900px" },
        "tab-s": { max: "700px" },
        phone: { max: "640px" },
        "phone-s": { max: "380px" },
      },
      margin: {
        hero: "4vw",
        body: "7vw",
      },
    },
  },
  plugins: [],
};
