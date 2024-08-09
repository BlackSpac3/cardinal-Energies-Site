import { PuffLoader } from "react-spinners";
import { styles } from "../utils/styles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setError(true);
      }
    }, 50000);

    return () => clearTimeout(timer);
  }, [loading]);

  const inputStyle =
    "border border-gray-100 rounded-md  w-full my-2 p-3 focus:outline-primary";
  return (
    <motion.section
      key={"about-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      className="mt-[90px]"
    >
      <div className="m-body">
        <div className="inline-block">
          <h1 className={`${styles.homePageSectionTitle}`}>Contact Us </h1>
          <div className="h-[2.5px] mt-1 w-full bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 phone:block mt-7">
          <div className="flex justify-between items-center gap-7 phone:block">
            <form className=" w-full">
              <div>
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid grid-cols-2 w-full gap-5 items-center">
                <div>
                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Company"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  className={`${inputStyle} h-[]focus:outline-primary"`}
                  name=""
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="bg-primary py-2 px-6 text-white hover:bg-white hover:text-primary hover:border hover:border-primary hover:animate-pulse rounded-md">
                Send
              </button>
            </form>
          </div>

          {error && (
            <div className="error-message">
              <p>Sorry, the map could not be loaded. Please try again later.</p>
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center">
              <PuffLoader color={"#2fae60"} loading={loading} size={50} />
            </div>
          )}
          <iframe
            className="w-[100%] rounded-md phone:mt-5"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style={{ border: 0, display: loading ? "none" : "block" }}
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=19,%20Sinari%20Daranijo%20Street,%20Victoria%20island%20Lagos+(Cardinal%20Torch%20Company%20Limited)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            onLoad={handleLoad}
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactUs;
