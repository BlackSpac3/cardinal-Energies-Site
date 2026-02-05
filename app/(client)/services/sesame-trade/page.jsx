import Image from "next/image";
import { assets } from "@assets/assets";
import Product from "@components/service_components/Product";
import Partners from "@components/home_page_components/Partners";
import Link from "@node_modules/next/link";
// import WhatsAppIcon from "@components/WhatsAppIcon";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        {/* <Image
          src={assets.hand_img}
          alt=""
          priority
          className="min-w-full absolute z-10 h-screen object-cover overflow-hidden object-center  "
        /> */}

        <main className="h-[100vh] lg:p-16 bg-gradient-to-r from-green-100 to-white relative overflow-hidden pt-20 ">
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-600 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500  rounded-full blur-xl opacity-30"></div>

          <div className="flex flex-col justify-between lg:flex-row items-center gap-12  px-20 py-16 phone:p-10 phone:shadow-none tab:mt-0 rounded-lg">
            <div id="left-sesame-trade-hero-section" className="lg:w-1/2 z-1 b">
              <h1 className="text-5xl font-bold text-gray-800 capitalize">
                Sesame seed <br /> trade{" "}
                <span className="text-orange-500">desk.</span>
              </h1>
              <p className="mt-4 text-gray-600 leading-normal w-[90%]">
                Our sesame export operations are equipped to handle up to 120
                metric tons per month, combining capacity with expert and smart
                solutions to meet the demands of global markets efficiently.
              </p>

              <Link href="/contact-us">
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-primary transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className=" rounded-md overflow-hidden w-80 h-96 flex items-center justify-center
              mx-auto border-8 border-transparent  shadow-lg"
            >
              <Image
                src={assets.sesame_img}
                alt="s"
                className="w-full h-full rounded object-cover"
              />
            </div>
          </div>
        </main>
      </div>

      {/* {Overview} */}

      <div className="px-16 text-center pt-14 pb-5">
        <div className="mx-auto flex flex-col items-center text-center px-[7vw] tab-s:px-0 gap-10">
          <h2 className="small-section-title text-primary ">Overview</h2>
          <div className="flex flex-col gap-5 items-center">
            <p className="section-big-text phone:text-2xl">
              Delivering Sesame Trade Solutions to Empower Global Markets and
              Supply Chains
            </p>
            <p className="body-text max-w-[720px]">
              We’re currently engaged in the business of commodities trading and
              processing with offerings that spans the entire value chain from
              plantation to production, processing, exports & distribution.
              Sesame seeds are a key global commodity, valued for their
              versatility and nutrition. Our trade desk connects producers,
              processors, and buyers, offering high-quality sesame varieties
              like hulled, natural, white, and black. With a focus on
              transparency and traceability, we streamline transactions and
              ensure reliable supply chains. Supported by our robust export
              capacity of 120 metric tons per month, we cater to both bulk
              orders and tailored solutions, delivering quality, consistency,
              and timely delivery to meet the demands of global markets.
            </p>
          </div>
        </div>
      </div>

      {/* price / ton */}
      <div className="px-36 tab:px-0">
        <div className="flex flex-row-reverse phone:flex-col phone:justify-center px-[4rem] m-auto items-center gap-20 py-14 phone:w-full ">
          <div className="phone:text-center w-full flex flex-col gap-4">
            <h1 className="section-big-text phone:text-2xl capitalize">
              Transparent & <br /> Competitive Pricing
            </h1>
            <p className="body-text">
              We offer competitive pricing for sesame seeds, with rates based on
              market conditions, seed variety, and order volume. Current pricing
              for high-quality sesame varieties starts at approximately{" "}
              <span className="font-bold"> $2,000 per ton</span>, depending on
              factors such as seed quality (hulled, natural, or black sesame)
              and delivery requirements. Our transparent pricing structure
              ensures that all clients receive accurate and fair prices based on
              up-to-date market trends. For a personalized quote or to discuss
              specific needs, please contact us for the latest pricing and
              terms.
            </p>
          </div>
          <div className=" phone:w-full">
            <Image
              src={assets.seseme_bag_img}
              alt="s"
              className="w-72 h-auto object-cover phone:m-auto"
            />
          </div>
        </div>
      </div>
      <div className="px-28">
        <hr />
      </div>
      {/* Shipping terms */}
      <div className="my-10">
        <section className="relative px-48 tab:px-10 ">
          <div className="text-center">
            <h2 className="small-section-title text-primary py-10">
              Shipping Terms
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 tab:grid-cols-1">
            <div className=" p-4">
              <h3 className="inline-flex gap-3 text-primary py-3">
                <span>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 -1.02 20.037 20.037"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                  >
                    <g id="cargo-ship-3" transform="translate(-1.963 -3)">
                      <path
                        id="secondary"
                        fill="#2fae60"
                        d="M16.62,10H20a1,1,0,0,1,1,1v1l-2.76,7.35a1,1,0,0,1-.93.65H5.5a1,1,0,0,1-1-.76l-1.5-6A1,1,0,0,1,4,12H15l.72-1.45a1,1,0,0,1,.9-.55Z"
                      />
                      <path
                        id="primary"
                        d="M8,4V6m8,10H14M11,7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v5h6Zm4.72,3.55L15,12H4a1,1,0,0,0-1,1.24l1.5,6a1,1,0,0,0,1,.76H17.31a1,1,0,0,0,.93-.65L21,12V11a1,1,0,0,0-1-1H16.62a1,1,0,0,0-.9.55Z"
                        fill="none"
                        stroke="#ddd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </span>
                CIF (Cost, Insurance, and Freight)
              </h3>
              <p className="body-text">
                We cover the cost of the sesame, insurance, and freight to the
                destination port. The buyer is responsible for any costs and
                risks after the goods arrive at the destination port.
              </p>
            </div>

            <div className="border-l tab:p-4 tab:border-0 py-4 pl-10 ">
              <h3 className="text-primary inline-flex gap-3 py-3">
                <svg
                  fill="#2fae60"
                  width="900px"
                  height="900px"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                >
                  <g>
                    <path
                      d="m41.94 25.34a22.45 22.45 0 0 0 0 44.88h1v-17.79c0-1.33 1-3 2.35-3h19c0-.74.07-1.25.07-1.65a22.52 22.52 0 0 0 -22.42-22.44zm17.91 20.52h-5.78a33.5 33.5 0 0 0 -3.17-13.46 18.16 18.16 0 0 1 8.95 13.46zm-20.48-14.75v14.75h-5.13c.39-7.03 2.61-12.59 5.13-14.75zm0 18.59v14.74c-2.5-2.17-4.74-7.7-5.13-14.74zm5.13-3.84v-14.75c2.5 2.16 4.76 7.72 5.13 14.75zm-11.5-13.46a34.57 34.57 0 0 0 -3.2 13.46h-5.8a18.11 18.11 0 0 1 9-13.46zm-9 17.94h5.81a33.55 33.55 0 0 0 3.19 13.42 18.11 18.11 0 0 1 -9-13.42z"
                      fill-rule="evenodd"
                    />

                    <path
                      d="m76.89 53.2h-27.23a3.13 3.13 0 0 0 -3.13 3.13v15.2a3.13 3.13 0 0 0 3.13 3.13h27.23a3.13 3.13 0 0 0 3.11-3.13v-15.2a3.13 3.13 0 0 0 -3.11-3.13zm-23.57 18.33a3.65 3.65 0 0 0 -3.55-3.75h-.1v-7.78a3.65 3.65 0 0 0 3.75-3.55v-.05-.09h19.78a3.65 3.65 0 0 0 3.59 3.69h.1v7.82a3.66 3.66 0 0 0 -3.75 3.58v.11z"
                      fill-rule="evenodd"
                    />

                    <circle cx="63.27" cy="63.66" r="5.25" />
                  </g>
                </svg>
                DDP (Delivered Duty Paid)
              </h3>
              <p className="body-text">
                We handle delivery, customs clearance, and payment of duties and
                taxes to the final destination. ​
              </p>
            </div>

            <div className=" p-4">
              <h3 className="text-primary inline-flex gap-3 py-3">
                <svg
                  fill="#2fae60"
                  width="800px"
                  height="800px"
                  viewBox="0 0 128 128"
                  className="size-7"
                >
                  <g id="Cruise">
                    <path d="M97.4,59.6c-0.1-0.3-0.4-0.4-0.6-0.5l-11.6-3.2l-4.7-14.1c-0.1-0.4-0.5-0.7-0.9-0.7H70v-9h5.5v-2H69h-9h-7.5v2H59v9H48.5   c-0.4,0-0.8,0.3-0.9,0.7l-4.7,14.1L31.2,59c-0.3,0.1-0.5,0.3-0.6,0.5c-0.1,0.3-0.1,0.5,0,0.8l14.5,37c0.1,0.4,0.5,0.6,0.9,0.6h36   c0.4,0,0.8-0.3,0.9-0.6l14.5-37C97.5,60.1,97.5,59.8,97.4,59.6z M61,32h7v9h-7V32z M45.2,55.2L49.2,43H60h9h9.8l4.1,12.2L64.3,50   c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3,0L45.2,55.2z M32.8,60.7L63,52.3V96H46.7L32.8,60.7z M81.3,96H65V52.3l30.2,8.4L81.3,96z" />
                  </g>
                </svg>
                FOB (Free on Board)
              </h3>
              <p className="body-text">
                We deliver the sesame to the specified port of shipment. The
                buyer assumes risk and costs once the goods are loaded onto the
                vessel.
              </p>
            </div>

            <div className="border-l tab:border-0 tab:p-4 py-4 pl-10 ">
              <h3 className=" text-primary inline-flex gap-5 py-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </span>
                FCA (Free Carrier) / DIS (Delivery in Store)
              </h3>
              <p className="body-text">
                We deliver the sesame to a carrier or a named place. The buyer
                assumes responsibility once the goods are handed over.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full px-12 py-10 phone:px-0">
        <div className="flex flex-col px-[5rem] w-full items-center gap-14">
          <h2 className="small-section-title text-center text-primary">
            Payment Terms
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-5 items-center">
              <div className="w-20 h-20 flex items-end">
                <Image
                  src={assets.cash_against_documents}
                  alt="Confirmed letter of credit"
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-primary">Cash Against Documents</h2>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div className="w-20 h-20 flex items-end">
                <Image
                  src={assets.cash_advance}
                  alt="Confirmed letter of credit"
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-primary">Cash in Advance</h2>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <div className="w-20 h-20 flex items-end">
                <Image
                  src={assets.letter_of_credit_icon}
                  alt="Confirmed letter of credit"
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-primary">Confirmed Letter of Credit</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-14 items-center justify-center gap-3">
          <Link
            href="https://wa.me/qr/TZZR633XX3TAD1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5  group py-3 rounded-full bg-transparent hover:bg-primary fill-primary hover:fill-white border border-primary hover:border-transparent text-primary hover:text-white transition-colors flex items-center gap-2">
              <div className="size-5 ">
                {/* <WhatsAppIcon /> */}
              </div>
              Message Us on WhatsApp
            </button>
          </Link>
        </div>
      </div>

      <div className="px-[10vw] py-[20px] ">
        <h1 className="py-7 text-2xl">Other Products</h1>
        <div className="bg-white flex flex-col gap-[5vw] phone:px-[5vw] w-full">
          <Product eliminate={"Sesame Seed"} />
        </div>
      </div>
    </div>
  );
};
export default page;
