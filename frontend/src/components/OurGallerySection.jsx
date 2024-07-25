import React from "react";
import { assets } from "../assets/assets";
// import './OurGallerySection.css'

const OurGallerySection = () => {
  return (
    <section className="m-body">
      <div>
        <h1 className="text-2xl mb-14">Our Gallery</h1>
      </div>

      <div className="ob grid grid-cols-2 h-[80vh] gap-2 w-full">
        <div id="image-left-section" className="h-[80vh] ">
          <img
            className="h-full w-full rounded-xl"
            src={assets.about_us_thumbnail2}
            alt="Cardinal Gallery"
          />
        </div>

        <div
          id="images-right-section"
          className="h-[80vh] grid grid-rows-2 gap-2"
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
          <div className="w-full">
            <img
              className="w-full h-full  object-fit rounded-xl"
              src={assets.about_us_thumbnail2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallerySection;
