import { Inter } from "next/font/google";
import "@styles/global.css";

import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.cardinaltorch.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Cardinal Torch",
    template: "%s - Cardinal Torch",
  },
  description:
    "We Are Redefining Africa's Commodity Supply Chain. We are engaged in the business of commodities trade. Our primary products are Cocoa, Soya, Coffee & Cashew.",

  url: "https://www.cardinaltorch.com",
  siteName: "Cardinal Torch",
  openGraph: {
    url: "https://www.cardinaltorch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: { google: "itqkWIEn5ul4jYd1RVKBGwmndRai0tygvGRmkQ_4OjI" },
  locale: "en_US",
  type: "website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SkeletonTheme baseColor="#f3f4f6" highlightColor="#efefef">
          <Toaster />
          <section>{children}</section>
        </SkeletonTheme>
      </body>
    </html>
  );
};

export default RootLayout;
