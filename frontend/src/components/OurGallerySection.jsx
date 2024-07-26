import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ourGallery.css";
import { color } from "framer-motion";

import { styles } from "../utils/styles.js";
import { assets } from "../assets/assets.js";

const OurGallerySection = () => {
  const images = [
    { img: "./g.jpg" },
    { img: "./header_img.jpg" },
    { img: "./header_img.png" },
    { img: "./g.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="m-body">
      <div className="mb-14">
        <h1 className={styles.homePageSectionTitle}>Our Gallery</h1>
      </div>

      <div className="ob grid grid-cols-2 phone:grid-cols-1  gap-2 w-full">
        <div id="image-left-section" className="h-[40vw] phone:h-[50vh]">
          <img
            className="h-full w-full rounded-xl phone:hidden"
            src={assets.about_us_thumbnail2}
            alt="Cardinal Gallery"
          />
          <div className="hidden phone:block">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div>
                  <img
                    key={index}
                    className=" h-[50vh] w-full rounded-3xl object-cover object-center"
                    src={image.img}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div
          id="images-right-section"
          className="h-[40vw] phone:hidden grid grid-rows-2 gap-2"
        >
          <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-fit rounded-xl  border"
              src={assets.about_us_thumbnail2}
              alt=""
            />
            <img
              className="w-full h-full object-fit rounded-xl  border"
              src={assets.about_us_thumbnail2}
              alt=""
            />
          </div>
          <div className="w-full relative rounded-xl bg-black z-10 ">
            <img
              className="w-full h-full  object-fit rounded-xl opacity-40"
              src={assets.about_us_thumbnail2}
              alt=""
            />
            <div className="absolute text-center text-white top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%]  ">
              <h1 className="text-2xl">
                <NavLink to="./about">View More</NavLink>
              </h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                alias perferendis asperiores quas accusantium eligendi facilis
                nam fugit.
              </p>
              <button className="px-5 py-2 border-solid border-white border-[1px] rounded-xl text-sm mt-4">
                Open Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallerySection;
