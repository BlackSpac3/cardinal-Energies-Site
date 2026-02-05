const Heading = () => {
  return (
    <div>
      <h1 className="text-center">PRIVACY POLICY</h1>
      <p className="body-text mt-1 !font-bold">
        Last updated November 26, 2024
      </p>
      <div className="body-text !font-normal mt-5 flex flex-col gap-5">
        <p>
          This Privacy Notice for Cardinal Torch Company Limited (doing business
          as Cardinal Torch) (<strong>'we'</strong>, <strong>'us'</strong>, or
          <strong>'our'</strong>), describes how and why we might access,
          collect, store, use, and/or share (<strong>'process'</strong>) your
          personal information when you use our services (
          <strong>'Services'</strong>), including when you:
        </p>

        <ul>
          <li>
            Visit our website at{" "}
            <a
              href="https://www.cardinaltorch.com"
              target="blank"
              className="!no-underline visited:!text-[#0077ff]"
            >
              https://www.cardinaltorch.com
            </a>{" "}
            , or any website of ours that links to this Privacy Notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice
          will help you understand your privacy rights and choices. We are
          responsible for making decisions about how your personal information
          is processed. If you do not agree with our policies and practices,
          please do not use our Services. If you still have any questions or
          concerns, please contact us at{" "}
          <a
            href="mailto:Info@cardinaltorch.com"
            className="!no-underline visited:!text-[#0077ff]"
          >
            Info@cardinaltorch.com.
          </a>
        </p>
      </div>
    </div>
  );
};
export default Heading;
