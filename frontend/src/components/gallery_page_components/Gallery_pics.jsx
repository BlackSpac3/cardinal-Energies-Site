import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import axios from "axios";
import { filterPaginationData } from "../../utils/filter-pagination-data";
import { url } from "../../assets/assets";
import Loading from "../Loading";
import { useRef } from "react";

const Gallery_pics = () => {
  const [images, setImages] = useState(null);
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    modalRef.current.showModal();
    setCurrentIndex(index);
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.results.length);
  };

  const showPrevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.results.length) % images.results.length
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

  const fetchImages = async () => {
    setImages(null);
    let formatedData;
    let page = 1;
    let max = 8;
    await axios
      .post(`${url}/api/image/list`, {
        page,
        max,
      })
      .then(async (res) => {
        formatedData = await filterPaginationData({
          state: images,
          data: res.data.data,
          page,
          max,
          countRoute: "/api/image/count",
        });
      })
      .catch((error) => {
        toast.error("Error connecting to server");
      });

    setImages(formatedData);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="m-body grid grid-cols-[1fr,1fr,1fr] grid-rows-4 gap-[10px]">
      {!images ? (
        <Loading />
      ) : (
        images.results.map((image, index) => (
          <div className={`${assignGridStyles(index)}`}>
            <img
              className="h-[50vh] phone:h-56 w-full cursor-pointer object-cover rounded-md"
              key={index}
              src={`${url}/images/${image.image}uploads/${image.image}`}
              onClick={() => openModal(index)}
            />
          </div>
        ))
      )}

      {images && (
        <dialog
          ref={modalRef}
          className="place-self-center w-[100vw] h-[100vh] bg-black bg-opacity-50"
        >
          <div className="flex flex-col h-full w-full  bg-transparent text-white">
            <div className="absolute top-0 left-0 flex w-full h-full">
              <img
                className="max-w-full max-h-full flex-shrink object-contain mx-auto "
                src={`${url}/images/${images.results[currentIndex].image}uploads/${images.results[currentIndex].image}`}
              />
            </div>

            <div className="relative h-full z-20">
              <div className="flex w-full items-start justify-between px-[4vw] py-7 bg-gradient-to-b from-[#00000070] to-transparent ">
                <p className="w-[60%] phone:w-[90%]">
                  {images.results[currentIndex].desc}
                </p>
                <button className=" flex justify-center items-center aspect-square">
                  <i
                    onClick={() => modalRef.current.close()}
                    className="fi fi-rr-cross"
                  ></i>
                </button>
              </div>

              <div className="flex absolute top-1/2 -translate-y-1/2 w-full justify-between">
                <button
                  className=" text-white text-2xl p-[4vw]"
                  onClick={showPrevImage}
                >
                  <i className="fi fi-rr-angle-left"></i>
                </button>

                <button
                  className=" text-white text-2xl p-[4vw]"
                  onClick={showNextImage}
                >
                  <i className="fi fi-rr-angle-right"></i>
                </button>
              </div>

              <div className="flex w-full absolute bottom-0 left-0 items-center justify-between px-[4vw] py-7 bg-gradient-to-t from-[#00000070] to-transparent">
                <div className="flex items-center gap-2">
                  <img
                    src={`${url}/profile-images/${images.results[currentIndex].author.personal_info.profile_img}uploads/${images.results[currentIndex].author.personal_info.profile_img}`}
                    alt=""
                    className="w-7 h-7 rounded-full bg-gray-50"
                  />
                  <p>
                    Uploaded by {""}
                    <span className="capitalize">{`${images.results[currentIndex].author.personal_info.first_name} ${images.results[currentIndex].author.personal_info.last_name}`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Gallery_pics;
