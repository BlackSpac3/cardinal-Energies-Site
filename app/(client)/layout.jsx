import Navbar from "./Navbar";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";
import NewsLetterPopUp from "@components/NewsLetterPopUp";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@components/GoogleAnalytics";
import CookieBanner from "@components/CookieBanner";
import ClientAppContextProvider from "@context/ClientAppContext";
// import CommodityTradePrices from "@components/CommodityTradePrices";

const layout = ({ children }) => {
  return (
    <section className="w-full h-full overflow-hidden min-h-screen">
      <ClientAppContextProvider>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-F2C0Q2XPLG" />
        <CookieBanner />
        <NewsLetterPopUp />
        <Toaster />
        <Navbar />
        <ScrollToTop />
        <div>{children}</div>
        <Footer />
        {/* <CommodityTradePrices /> */}
      </ClientAppContextProvider>
    </section>
  );
};
export default layout;
