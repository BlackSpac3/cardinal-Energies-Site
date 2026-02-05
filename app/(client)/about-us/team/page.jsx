import Management from "@components/team_page_components/Management";
import Board from "@components/team_page_components/Board";
import Header from "@components/team_page_components/Header";
import Image from "next/image";
import { assets } from "@assets/assets";
import EmployeeDetailModal from "@components/team_page_components/EmployeeDetailModal";

export const metadata = {
  title: "Team",
  description:
    "David is an astute business professional with over twenty years of successful business experience in various sectors including commodity trading",
  openGraph: {
    url: "https://www.cardinaltorch.com/about-us/team",
    type: "website",
    images: [
      {
        url: "https://www.cardinaltorch.com/opengraph-image.png?2d14161984ee4deb",
        width: 1200,
        height: 630,
      },
    ],
  },
  url: "https://www.cardinaltorch.com/about-us/team",
  alternates: {
    canonical: "/about-us/team",
  },
  type: "website",
};

const page = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[5vw] p-[5vw]">
      <EmployeeDetailModal />
      <Header />

      <div className="relative flex items-center w-full gap-5">
        <h2 className="min-w-fit text-lg">Board of Directors</h2>
        <hr className="w-full" />
        <Image
          src={assets.sesame_bg_illustration}
          className=" absolute w-64 h-44 -right-48 -top-20 opacity-40 phone:w-36 phone:h-28"
          alt=""
          srcset=""
          priority={true}
        />
      </div>
      <Board />
      <div className="flex items-center w-full gap-5">
        <h2 className="min-w-fit text-lg">Management Team</h2>
        <hr className="w-full" />
      </div>
      <Management />
    </div>
  );
};
export default page;
