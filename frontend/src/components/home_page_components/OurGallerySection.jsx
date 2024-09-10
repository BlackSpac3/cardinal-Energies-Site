import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { url } from "../../assets/assets.js";
import { styles } from "../../utils/styles.js";
import { assets } from "../../assets/assets.js";
import axios from "axios";

const OurGallerySection = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fetchImages = async () => {
    setImages(null);
    let formatedData;
    let page = 1;
    let max = 4;
    await axios
      .post(`${url}/api/image/list`, {
        page,
        max,
      })
      .then(async (res) => {
        setImages(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="m-body">
      <div className="">
        <h1 className={styles.homePageSectionTitle}>Our Gallery</h1>
      </div>

      {images && (
        <div className="ob grid grid-cols-2 tab-s:grid-cols-1  mt-14 tab-s:mt-6 gap-2 w-full outline-none">
          <div
            id="image-left-section"
            className="h-[40vw] tab-s:h-[120vw] outline-none"
          >
            <img
              className="h-full w-full rounded-xl tab-s:hidden object-cover"
              src={`${url}/images/${images[0].image}uploads/${images[0].image}`}
              alt="Cardinal Gallery"
            />
            <div className="hidden tab-s:block outline-none">
              <Slider {...settings} className="outline-none">
                {images.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        className=" h-[120vw] w-full rounded-3xl object-cover object-center outline-none"
                        src={`${url}/images/${image.image}uploads/${image.image}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div
            id="images-right-section"
            className="h-[40vw] tab-s:hidden grid grid-rows-2 gap-2"
          >
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl  border"
                src={`${url}/images/${images[1].image}uploads/${images[1].image}`}
                alt=""
              />
              <img
                className="w-full h-full object-cover rounded-xl  border"
                src={`${url}/images/${images[2].image}uploads/${images[2].image}`}
                alt=""
              />
            </div>
            <div className="w-full relative rounded-xl bg-black z-10 ">
              <img
                className="w-full h-full  object-cover rounded-xl opacity-40"
                src={`${url}/images/${images[3].image}uploads/${images[3].image}`}
                alt=""
              />
              <div className="absolute flex flex-col items-center text-center text-white top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%]  ">
                <h1 className="text-2xl">View More</h1>

                <p className="text-sm mt-2 w-[90%]">
                  Our gallery highlights the projects, people, and technologies
                  that make us a leader in the energy industry.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate("/our-gallery")}
                  className="px-5 py-2 border-solid border-white border-[1px] rounded-xl text-sm mt-4 hover:bg-[#ffffff30]"
                >
                  Open Gallery
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallerySection;
