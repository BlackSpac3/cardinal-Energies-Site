const HowDoWeProccessInfo = () => {
  return (
    <div id="how-do-we-process-your-information" className="scroll-mt-24">
      <h3>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
      <div className="body-text !font-normal mt-5 flex flex-col gap-5">
        <p className="italic">
          <strong>In Short: </strong>We process your information to provide,
          improve, and administer our Services, communicate with you, for
          security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent.
        </p>

        <p>
          <strong>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </strong>
        </p>

        <ul className="!flex !flex-col gap-5">
          <li>
            <strong>
              To respond to user inquiries/offer support to users.
            </strong>{" "}
            We may process your information to respond to your inquiries and
            solve any potential issues you might have with the requested
            service.
          </li>
          <li>
            <strong>To send administrative information to you.</strong> We may
            process your information to send you details about our products and
            services, changes to our terms and policies, and other similar
            information.
          </li>
          <li>
            <strong>To request feedback.</strong> We may process your
            information when necessary to request feedback and to contact you
            about your use of our Services.
          </li>
          <li>
            <strong>
              To send you marketing and promotional communications.
            </strong>{" "}
            We may process the personal information you send to us for our
            marketing purposes, if this is in accordance with your marketing
            preferences. You can opt out of our marketing emails at any time.
            For more information, see{" "}
            <a
              href="/privacy-policy#what-are-your-privacy-rights"
              className="!no-underline visited:!text-[#0077ff]"
            >
              'WHAT ARE YOUR PRIVACY RIGHTS?'
            </a>{" "}
            below.
          </li>
          <li>
            <strong>To save or protect an individual's vital interest.</strong>{" "}
            We may process your information when necessary to save or protect an
            individual’s vital interest, such as to prevent harm.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HowDoWeProccessInfo;
