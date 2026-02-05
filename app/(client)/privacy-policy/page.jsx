import ControlsForDoNotTrack from "@components/privacy_policy_components/ControlsForDoNotTrack";
import DoUnitedStates from "@components/privacy_policy_components/DoUnitedStates";
import DoWeCollectInfoFromMinors from "@components/privacy_policy_components/DoWeCollectInfoFromMinors";
import DoWeMakeUpdates from "@components/privacy_policy_components/DoWeMakeUpdates";
import DoWeUseCookies from "@components/privacy_policy_components/DoWeUseCookies";
import Heading from "@components/privacy_policy_components/Heading";
import HowCanYouContactUs from "@components/privacy_policy_components/HowCanYouContactUs";
import HowCanYouReview from "@components/privacy_policy_components/HowCanYouReview";
import HowDoWekeepYourInfoSafe from "@components/privacy_policy_components/HowDoWekeepYourInfoSafe";
import HowDoWeProccessInfo from "@components/privacy_policy_components/HowDoWeProccessInfo";
import HowLongDoWeKeepYourInfo from "@components/privacy_policy_components/HowLongDoWeKeepYourInfo";
import SummaryOfKeyPoints from "@components/privacy_policy_components/SummaryOfKeyPoints";
import TOC from "@components/privacy_policy_components/TOC";
import WhatInfoWeCollect from "@components/privacy_policy_components/WhatInfoWeCollect";
import WhatLegalBases from "@components/privacy_policy_components/WhatLegalBases";
import WhenAndWhoWeShare from "@components/privacy_policy_components/WhenAndWhoWeShare";
import YourPrivacyRights from "@components/privacy_policy_components/YourPrivacyRights";

export const metadata = {
  title: "Privacy Policy",
  openGraph: {
    url: "https://www.cardinaltorch.com/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://www.cardinaltorch.com/opengraph-image.png?2d14161984ee4deb",
        width: 1200,
        height: 630,
      },
    ],
  },
  url: "https://www.cardinaltorch.com/privacy-policy",
  alternates: {
    canonical: "/privacy-policy",
  },
  type: "website",
};

const page = () => {
  return (
    <section className="my-[40px] flex flex-col gap-7 max-w-[1024px] p-5 mx-auto blog-content">
      <Heading />
      <SummaryOfKeyPoints />
      <TOC />
      <WhatInfoWeCollect />
      <HowDoWeProccessInfo />
      <WhatLegalBases />
      <WhenAndWhoWeShare />
      <DoWeUseCookies />
      <HowLongDoWeKeepYourInfo />
      <HowDoWekeepYourInfoSafe />
      <DoWeCollectInfoFromMinors />
      <YourPrivacyRights />
      <ControlsForDoNotTrack />
      <DoUnitedStates />
      <DoWeMakeUpdates />
      <HowCanYouContactUs />
      <HowCanYouReview />
    </section>
  );
};
export default page;
