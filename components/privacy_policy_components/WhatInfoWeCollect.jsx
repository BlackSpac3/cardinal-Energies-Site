const WhatInfoWeCollect = () => {
  return (
    <div id="what-information-we-collect" m className="scroll-mt-24">
      <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>

      <p className="font-bold my-5">Personal information you disclose to us</p>
      <div className="body-text !font-normal flex flex-col gap-5 mt-5">
        <p className="italic">
          <strong>In Short: </strong>We collect personal information that you
          provide to us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and Services, when you participate in activities on the
          Services, or otherwise when you contact us.
        </p>
        <p id="personal-info-provided-by-you" className="scroll-mt-24">
          <strong>Personal Information Provided by You.</strong> The personal
          information that we collect depends on the context of your
          interactions with us and the Services, the choices you make, and the
          products and features you use. The personal information we collect may
          include the following:
        </p>
        <ul>
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
        </ul>
        <p>
          <strong>Sensitive Information.</strong> We do not process sensitive
          information.
        </p>
        <p>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>
      </div>
      <p className="my-5 font-bold">Information automatically collected</p>
      <div className="body-text !font-normal flex flex-col gap-5 mt-5">
        <p className="italic">
          <strong>In Short: </strong>Some information — such as your Internet
          Protocol (IP) address and/or browser and device characteristics — is
          collected automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>
        <p>The information we collect includes:</p>
        <ul className="italic font-light !flex !flex-col gap-5">
          <li>
            <strong>Log and Usage Data.</strong> Log and usage data is
            service-related, diagnostic, usage, and performance information our
            servers automatically collect when you access or use our Services
            and which we record in log files. Depending on how you interact with
            us, this log data may include your IP address, device information,
            browser type, and settings and information about your activity in
            the Services (such as the date/time stamps associated with your
            usage, pages and files viewed, searches, and other actions you take
            such as which features you use), device event information (such as
            system activity, error reports (sometimes called 'crash dumps'), and
            hardware settings).
          </li>
          <li>
            <strong>Device Data.</strong> We collect device data such as
            information about your computer, phone, tablet, or other device you
            use to access the Services. Depending on the device used, this
            device data may include information such as your IP address (or
            proxy server), device and application identification numbers,
            location, browser type, hardware model, Internet service provider
            and/or mobile carrier, operating system, and system configuration
            information.
          </li>
          <li>
            <strong>Location Data.</strong> We collect location data such as
            information about your device's location, which can be either
            precise or imprecise. How much information we collect depends on the
            type and settings of the device you use to access the Services. For
            example, we may use GPS and other technologies to collect
            geolocation data that tells us your current location (based on your
            IP address). You can opt out of allowing us to collect this
            information either by refusing access to the information or by
            disabling your Location setting on your device. However, if you
            choose to opt out, you may not be able to use certain aspects of the
            Services.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WhatInfoWeCollect;
