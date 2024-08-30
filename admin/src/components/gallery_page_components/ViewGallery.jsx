import SearchBox from "../SearchBox";
import { assets } from "../../assets/assets";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Loading from "../Loading";
import { capitalize } from "../../utils";
import { filterPaginationData } from "../../utils/filter-pagination-data";
import toast from "react-hot-toast";
import ImgSkelentonCard from "../Skelentons/ImgSkelentonCard";

const ViewGallery = ({ setState }) => {
  const { url } = useContext(UserContext);
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const modalRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = () => {};
  const openModal = (index) => {
    // setIsOpen(true);
    modalRef.current.showModal();
    setCurrentIndex(index);
  };

  const closeModal = () => {
    // setIsOpen(false);
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

  const fetchImages = async () => {
    setImages(null);
    let formatedData;
    let page = 1;
    let max = 9;
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
    console.log(formatedData);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <section className="flex relative w-full h-full">
      <div className="flex flex-col p-10 gap-10 overflow-y-scroll w-full">
        <div className="flex justify-between w-full gap-10 items-center">
          <div className="flex w-[50%]">
            <SearchBox onKeyDown={handleSearch} placeholder="Find Pictures" />
          </div>
          <div className="flex gap-3 text-xs leading-none">
            <select className="border p-1 rounded-md ">
              <option>All</option>
              <option>By Me</option>
            </select>
            <button onClick={() => setState("upload")} className="bttn-wide">
              Upload Image
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 phone:grid-cols-1">
          {!images ? (
            <ImgSkelentonCard cards={9} />
          ) : (
            images.results.map((image, index) => {
              const image_url = `${url}/images/${image.image}uploads/${image.image}`;
              const author_img = `${url}/profile-images/${image.author.personal_info.profile_img}uploads/${image.author.personal_info.profile_img}`;
              const author = `${capitalize(
                image.author.personal_info.first_name
              )} ${capitalize(image.author.personal_info.last_name)}`;

              return (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="relative rounded-md h-[200px] cursor-pointer"
                >
                  <div
                    className={`
              absolute flex flex-col justify-end w-full h-full left-0 top-0 rounded-md bg-[#00000060] opacity-0 hover:opacity-100 z-1 p-5 text-white  `}
                  >
                    <div>
                      <p className="line-clamp-3 leading-tight">{image.desc}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <img
                          src={author_img}
                          alt=""
                          className="w-[20px] h-[20px] rounded-full bg-gray-50"
                        />

                        <p className="text-sm text-gray-100">{`Uploaded by ${author}`}</p>
                      </div>
                    </div>
                  </div>
                  <picture>
                    <source type="image/webp" />
                    <img
                      key={index}
                      className="w-full h-full rounded-md object-cover"
                      src={image_url}
                      alt={image.desc}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </picture>
                </div>
              );
            })
          )}
        </div>
      </div>

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
                  <i onClick={closeModal} className="fi fi-rr-cross"></i>
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
      {/* {isOpen && (
        <div className="flex flex-col h-full w-full absolute top-0 left-0   bg-black bg-opacity-75  z-50  text-white">
          <div className="absolute top-0 left-0 flex w-full h-full">
            <img
              className="max-w-full max-h-full flex-shrink object-contain mx-auto "
              src={`${url}/images/${images.results[currentIndex].image}uploads/${images.results[currentIndex].image}`}
            />
          </div>

          <div className="flex flex-col justify-between h-full z-20">
            <div className="flex w-full items-center justify-between px-[3vw] py-5 bg-gradient-to-b from-[#00000070] to-transparent ">
              <p className="w-[60%]">{images.results[currentIndex].desc}</p>
              <button className="h-full aspect-square">
                <i onClick={closeModal} className="fi fi-rr-cross"></i>
              </button>
            </div>
            <div className="flex justify-between">
              <button
                className=" text-white text-2xl p-4"
                onClick={showPrevImage}
              >
                <i className="fi fi-rr-angle-left"></i>
              </button>

              <button
                className=" text-white text-2xl p-4"
                onClick={showNextImage}
              >
                <i className="fi fi-rr-angle-right"></i>
              </button>
            </div>

            <div className="flex w-full items-center justify-between px-[3vw] py-5 bg-gradient-to-t from-[#00000070] to-transparent">
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
      )} */}
    </section>
  );
};
export default ViewGallery;
