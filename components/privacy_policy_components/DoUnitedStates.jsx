const DoUnitedStates = () => {
  const tableData = [
    {
      category: "A. Identifiers",
      examples:
        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
      collected: "YES",
    },
    {
      category:
        "B. Personal information as defined in the California Customer Records statute",
      examples:
        "Name, contact information, education, employment, employment history, and financial information",
      collected: "YES",
    },
    {
      category:
        "C. Protected classification characteristics under state or federal law",
      examples:
        "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
      collected: "NO",
    },
    {
      category: "D. Commercial information",
      examples:
        "Transaction information, purchase history, financial details, and payment information",
      collected: "NO",
    },
    {
      category: "E. Biometric information",
      examples: "Fingerprints and voiceprints",
      collected: "NO",
    },
    {
      category: "F. Internet or other similar network activity",
      examples:
        "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements",
      collected: "NO",
    },
    {
      category: "G. Geolocation data",
      examples: "Device location",
      collected: "NO",
    },
    {
      category: "H. Audio, electronic, sensory, or similar information",
      examples:
        "Images and audio, video or call recordings created in connection with our business activities",
      collected: "NO",
    },
    {
      category: "I. Professional or employment-related information",
      examples:
        "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
      collected: "NO",
    },
    {
      category: "J. Education Information",
      examples: "Student records and directory information",
      collected: "NO",
    },
    {
      category: "K. Inferences drawn from collected personal information",
      examples:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
      collected: "NO",
    },
    {
      category: "L. Sensitive personal Information",
      examples: "",
      collected: "NO",
    },
  ];

  return (
    <div
      id="do-united-states-residents-have-specific-privacy-rights"
      className="scroll-mt-24"
    >
      <h3>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
      <div className="body-text !font-normal mt-5 flex flex-col gap-5">
        <p className="italic">
          <strong>In Short: </strong>If you are a resident of California,
          Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
          Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon,
          Tennessee, Texas, Utah, or Virginia, you may have the right to request
          access to and receive details about the personal information we
          maintain about you and how we have processed it, correct inaccuracies,
          get a copy of, or delete your personal information. You may also have
          the right to withdraw your consent to our processing of your personal
          information. These rights may be limited in some circumstances by
          applicable law. More information is provided below.
        </p>
        <h4 className="font-bold text-black text-base">
          Categories of Personal Information We Collect
        </h4>
        <p>
          We have collected the following categories of personal information in
          the past twelve (12) months:
        </p>

        <table>
          <tr>
            <th className="w-[30%] text-left">Category</th>
            <th className="w-[50%] text-left">Examples</th>
            <th className="w-[10%]">Collected</th>
          </tr>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.category}</td>
              <td>{data.examples}</td>
              <td className="text-center">{data.collected}</td>
            </tr>
          ))}
        </table>

        <p>
          We may also collect other personal information outside of these
          categories through instances where you interact with us in person,
          online, or by phone or mail in the context of:
        </p>

        <ul className="!flex !flex-col gap-5">
          <li>Receiving help through our customer support channels;</li>

          <li>Participation in customer surveys or contests; and</li>

          <li>
            Facilitation in the delivery of our Services and to respond to your
            inquiries.
          </li>
        </ul>

        <p>
          We will use and retain the collected personal information as needed to
          provide the Services or for:
        </p>

        <ul className="!flex !flex-col gap-5">
          <li>Category A - 6 months</li>
          <li>Category B - 6 months</li>
        </ul>

        <h4 className="font-bold text-black text-base">
          Sources of Personal Information
        </h4>

        <p>
          Learn more about the sources of personal information we collect in{" "}
          <a
            href="/privacy-policy#what-information-we-collect"
            className="!no-underline visited:!text-[#0077ff]"
          >
            'WHAT INFORMATION DO WE COLLECT?'
          </a>
        </p>

        <h4 className="font-bold text-black text-base">
          How We Use and Share Personal Information
        </h4>

        <p>
          Learn more about how we use your personal information in the section,{" "}
          <a
            href="/privacy-policy#how-do-we-process-your-information"
            className="!no-underline visited:!text-[#0077ff]"
          >
            'HOW DO WE PROCESS YOUR INFORMATION?'
          </a>
        </p>

        <p>
          <strong>Will your information be shared with anyone else?</strong>
        </p>

        <p>
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Learn more about how we disclose personal information to in the
          section,{" "}
          <a
            href="/privacy-policy#when-and-with-whom-do-we-share-your-personal-information"
            className="!no-underline visited:!text-[#0077ff]"
          >
            'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'
          </a>
        </p>

        <p>
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be 'selling'
          of your personal information.
        </p>

        <p>
          We have not disclosed, sold, or shared any personal information to
          third parties for a business or commercial purpose in the preceding
          twelve (12) months. We will not sell or share personal information in
          the future belonging to website visitors, users, and other consumers.
        </p>

        <h4 className="font-bold text-black text-base">Your Rights</h4>
        <p>
          You have rights under certain US state data protection laws. However,
          these rights are not absolute, and in certain cases, we may decline
          your request as permitted by law. These rights include:
        </p>

        <ul className="!flex !flex-col gap-5">
          <li>
            <strong>Right to know</strong> whether or not we are processing your
            personal data
          </li>
          <li>
            <strong>Right to access</strong> your personal data
          </li>
          <li>
            <strong>Right to correct</strong> inaccuracies in your personal data
          </li>
          <li>
            <strong>Right to request</strong> the deletion of your personal data
          </li>
          <li>
            <strong>Right to obtain a copy</strong> of the personal data you
            previously shared with us
          </li>
          <li>
            <strong>Right to non-discrimination</strong> for exercising your
            rights
          </li>
          <li>
            <strong>Right to opt out</strong> of the processing of your personal
            data if it is used for targeted advertising (or sharing as defined
            under California’s privacy law), the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects ('profiling')
          </li>
        </ul>

        <p>
          Depending upon the state where you live, you may also have the
          following rights:
        </p>

        <ul className="!flex !flex-col gap-5">
          <li>
            Right to access the categories of personal data being processed (as
            permitted by applicable law, including Minnesota’s privacy law)
          </li>
          <li>
            Right to access the categories of personal data being processed (as
            permitted by applicable law, including Minnesota’s privacy law)
          </li>
          <li>
            Right to obtain a list of specific third parties to which we have
            disclosed personal data (as permitted by applicable law, including
            Minnesota's and Oregon's privacy law)
          </li>
          <li>
            Right to review, understand, question, and correct how personal data
            has been profiled (as permitted by applicable law, including
            Minnesota’s privacy law)
          </li>
          <li>
            Right to limit use and disclosure of sensitive personal data (as
            permitted by applicable law, including California’s privacy law)
          </li>
          <li>
            Right to opt out of the collection of sensitive data and personal
            data collected through the operation of a voice or facial
            recognition feature (as permitted by applicable law, including
            Florida’s privacy law)
          </li>
        </ul>
        <h4 className="font-bold text-black text-base">
          How to Exercise Your Rights
        </h4>
        <p>
          To exercise these rights, you can contact us by submitting a{" "}
          <a
            href="https://app.termly.io/notify/6aa7b017-5cad-477a-bf87-71217003485c"
            target="_blank"
            rel="noopener noreferrer"
            className="!no-underline visited:!text-[#0077ff]"
          >
            data subject access request
          </a>
          , by emailing us at Info@cardinaltorch.com, or by referring to the
          contact details at the bottom of this document.
        </p>
        <p>
          We will honour your opt-out preferences if you enact the{" "}
          <a
            href="https://globalprivacycontrol.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="!no-underline visited:!text-[#0077ff]"
          >
            Global Privacy Control
          </a>{" "}
          (GPC) opt-out signal on your browser.
        </p>
        <p>
          Under certain US state data protection laws, you can designate an
          authorised agent to make a request on your behalf. We may deny a
          request from an authorised agent that does not submit proof that they
          have been validly authorised to act on your behalf in accordance with
          applicable laws.
        </p>

        <h4 className="font-bold text-black text-base">Request Verification</h4>
        <p>
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. We will only use personal information provided in your
          request to verify your identity or authority to make the request.
          However, if we cannot verify your identity from the information
          already maintained by us, we may request that you provide additional
          information for the purposes of verifying your identity and for
          security or fraud-prevention purposes.
        </p>
        <p>
          If you submit the request through an authorised agent, we may need to
          collect additional information to verify your identity before
          processing your request and the agent will need to provide a written
          and signed permission from you to submit such request on your behalf.
        </p>

        <h4 className="font-bold text-black text-base">Appeals</h4>
        <p>
          Under certain US state data protection laws, if we decline to take
          action regarding your request, you may appeal our decision by emailing
          us at Info@cardinaltorch.com. We will inform you in writing of any
          action taken or not taken in response to the appeal, including a
          written explanation of the reasons for the decisions. If your appeal
          is denied, you may submit a complaint to your state attorney general.
        </p>

        <h4 className="font-bold text-black text-base">
          California 'Shine The Light' Law
        </h4>
        <p>
          California Civil Code Section 1798.83, also known as the 'Shine The
          Light' law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us by using the contact details provided in the section{" "}
          <a
            href="/privacy-policy#how-can-you-contact-us-about-this-notice"
            className="!no-underline visited:!text-[#0077ff]"
          >
            'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'
          </a>
        </p>
      </div>
    </div>
  );
};
export default DoUnitedStates;
