import ContactUsPage from "@components/contact_us_components/ContactUsPage";

export const metadata = {
  title: "Contact Us",
  description:
    "19B, Sinari Daranijo Street, Victoria Island, Lagos, Nigeria. Our hours. 9:00 AM – 5.00 PM Monday – Friday. Contact us. Phone: Email: info@cardinaltorch.com.",
  openGraph: {
    url: "https://www.cardinaltorch.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://www.cardinaltorch.com/opengraph-image.png?2d14161984ee4deb",
        width: 1200,
        height: 630,
      },
    ],
  },
  url: "https://www.cardinaltorch.com/contact-us",
  alternates: {
    canonical: "/contact-us",
  },
  type: "website",
};

const page = () => {
  return <ContactUsPage />;
};
export default page;
