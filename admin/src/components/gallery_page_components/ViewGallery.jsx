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
import NoDataMessage from "../NoDataMessage";
import ConfirmDelDialog from "../ConfirmDelDialog";

const ViewGallery = ({ setState }) => {
  const {
    url,
    userData: { user_id, user_type, access_token },
  } = useContext(UserContext);
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const modalRef = useRef(null);
  const confirmDelModalIdName = "confirm-delete-image-modal";

  const [currentIndex, setCurrentIndex] = useState(null);
  let [currentImg_id, setCurrentImg_id] = useState(null);
  let byAuthor = false;
  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.keyCode == 13 && query.length) {
      fetchImages();
    }
  };
  const clearSearch = (e) => {
    setQuery(e.target.value);
    e.target.value == "" && fetchImages();
  };
  const filterSearch = (e) => {
    e.target.value == "all" ? (byAuthor = false) : (byAuthor = true);
    fetchImages();
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    modalRef.current.showModal();
    setCurrentImg_id(images.results[index]._id);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.results.length);
    setCurrentImg_id(
      images.results[(currentIndex + 1) % images.results.length]._id
    );
  };

  const showPrevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.results.length) % images.results.length
    );
    setCurrentImg_id(
      images.results[
        (currentIndex - 1 + images.results.length) % images.results.length
      ]._id
    );
  };

  const delImage = async () => {
    const loadingToast = toast.loading("Deleting...", { id: "deleting-image" });

    try {
      const res = await axios.post(
        `${url}/api/image/remove`,
        { img_id: currentImg_id },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      toast.dismiss(loadingToast);
      toast.success(res.data.message, { id: "image-delete-success" });
      document.getElementById(confirmDelModalIdName).close();
      modalRef.current.close();
      fetchImages();
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong somewhere", {
        id: "something-went-wrong-somewhere",
      });
    }
  };
  const fetchImages = async () => {
    setImages(null);
    let formatedData;
    let page = 1;
    let max = 9;
    let author_id = null;

    byAuthor ? (author_id = user_id) : (author_id = null);
    await axios
      .post(`${url}/api/image/list`, {
        query,
        page,
        max,
        author_id,
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
    fetchImages({ query });
  }, []);

  return (
    <section className="flex relative w-full h-full">
      <div className="hidden tab-s:block fixed bottom-0 p-2 w-full z-10 bg-white">
        <button
          onClick={() => setState("upload")}
          className="bttn-wide w-full "
        >
          Upload Image
        </button>
      </div>
      <div className="flex flex-col py-10 px-[3vw] tab-m:px-[5vw] gap-10 overflow-y-scroll w-full">
        <div className="flex justify-between w-full gap-2 ">
          <div className="flex w-[50%] tab-s:w-full">
            <SearchBox
              filter={filterSearch}
              options={[
                { name: "All", value: "all" },
                { name: "By me", value: "by me" },
              ]}
              onKeyDown={handleSearch}
              onChange={clearSearch}
              search={() => query.length && fetchImages()}
              placeholder="Find Pictures"
            />
          </div>

          <button
            onClick={() => setState("upload")}
            className="bttn bg-primary text-xs tab-s:hidden"
          >
            Upload Image
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 phone:grid-cols-1">
          {!images ? (
            <ImgSkelentonCard cards={9} />
          ) : images.results.length ? (
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
          ) : (
            <div className="col-span-3">
              <NoDataMessage message="No Images" />
            </div>
          )}
        </div>
      </div>

      <dialog
        ref={modalRef}
        className="place-self-center w-[100vw] h-[100vh] bg-black bg-opacity-50"
      >
        {images && currentIndex != null && (
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
                {user_type == "admin" && (
                  <button
                    onClick={() =>
                      document.getElementById(confirmDelModalIdName).showModal()
                    }
                    className="p-3 text-lg bg-red-500 flex items-center rounded-full  justify-center gap-1"
                  >
                    <i className="fi fi-rr-trash"></i>
                    {/* <p>Delete</p> */}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>

      <ConfirmDelDialog
        id_name={confirmDelModalIdName}
        delfunc={delImage}
        warningText="This image will be permanently deleted, and this action cannot be reversed."
      />
    </section>
  );
};
export default ViewGallery;
