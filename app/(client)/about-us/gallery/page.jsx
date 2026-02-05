import Header from "@components/gallery_page_components/Header";
import Gallery_pics from "@components/gallery_page_components/Gallery_pics";

export const metadata = {
  title: "Gallery",
  description:
    "Browse through a collection of our favorite work, each reflecting our passion and attention to detail. We’re excited to share our journey with you.",
  openGraph: {
    url: "https://www.cardinaltorch.com/about-us/gallery",
    type: "website",
    images: [
      {
        url: "https://www.cardinaltorch.com/opengraph-image.png?2d14161984ee4deb",
        width: 1200,
        height: 630,
      },
    ],
  },
  url: "https://www.cardinaltorch.com/about-us/gallery",
  alternates: {
    canonical: "/about-us/gallery",
  },
  type: "website",
};

const page = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[5vw] p-[5vw]">
      <Header />
      <hr />
      <Gallery_pics />
    </div>
  );
};
export default page;
