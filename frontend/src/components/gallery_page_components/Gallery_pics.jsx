import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Gallery_pics = () => {
  const images = [
    { img: assets.oil_img },
    { img: assets.header_img },
    { img: assets.pet1_img },
    { img: assets.oil2_img },
    { img: assets.about_us_thumbnail1 },
    { img: assets.pet2_img },
    { img: assets.pet3_img },
    { img: assets.about_us_thumbnail2 },
    { img: assets.header_img },
    { img: assets.header_img },
    { img: assets.header_img },
    { img: assets.header_img },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const assignGridStyles = (index) => {
    switch (index % 5) {
      case 0:
        return "col-span-1 row-span-1";
      case 1:
        return "col-span-2 row-span-1";
      case 2:
        return "col-span-3 row-span-1";
      case 3:
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="m-body grid grid-cols-[1fr,1fr,1fr] grid-rows-4 gap-[10px]">
      {images.map((image, index) => (
        <div className={`${assignGridStyles(index)}`}>
          <img
            className="h-[50vh] phone:h-56 w-full cursor-pointer object-cover rounded-md"
            key={image.id}
            src={image.img}
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <span
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              className="max-w-full max-h-screen"
              src={images[currentIndex].img}
              // alt={images[currentIndex].alt}
            />
            {/* <div className="text-center text-white mt-4">{images[currentIndex].alt}</div> */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl px-4 py-2 rounded-r cursor-pointer"
              onClick={showPrevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl px-4 py-2 rounded-l cursor-pointer"
              onClick={showNextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery_pics;
