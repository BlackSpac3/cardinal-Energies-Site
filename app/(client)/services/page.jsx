import Cooperative from "@components/service_components/Cooperative";
import Header from "@components/service_components/Header";
import Product from "@components/service_components/Product";

export const metadata = {
  title: "Products &amp; Services",
  description:
    "Cardinal Torch is strong player in global Cocoa trade, shipping up to 200MT of cocoa products to overseas buyers monthly",
  openGraph: {
    url: "https://www.cardinaltorch.com/services",
    type: "website",
    images: [
      {
        url: "https://www.cardinaltorch.com/opengraph-image.png?2d14161984ee4deb",
        width: 1200,
        height: 630,
      },
    ],
  },
  url: "https://www.cardinaltorch.com/services",
  alternates: {
    canonical: "/services",
  },
  type: "website",
};

const page = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="bg-white px-[10vw] py-[20px] flex flex-col gap-[5vw] phone:px-[5vw] w-full">
        <Header />
        <hr />
        <Product />
      </div>
      <Cooperative />
    </section>
  );
};
export default page;
