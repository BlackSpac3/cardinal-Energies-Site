import { useState } from "react";
import { icons } from "../assets/assets";

const AddThumbnail = ({ setData }) => {
  const [thumbnail, setThumbnail] = useState(false);

  const handleImageLoad = (e) => {
    setThumbnail(e.target.files[0]);
    setData(e.target.files[0]);
  };

  return (
    <div>
      <div id="add-img-upload">
        <label htmlFor="image">
          <div className="flex flex-col place-content-center bg-[#efefef] rounded-md h-[200px] overflow-hidden cursor-pointer">
            {thumbnail ? (
              <div className="relative">
                <img
                  src={URL.createObjectURL(thumbnail)}
                  className="h-full object-cover"
                />
                {/* <div className="absolute bg-white w-full h-full top-0 left-0 opacity-50">
                      <div>
                        <img src="" alt="" />
                      </div>
                    </div> */}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <img src={icons.upload_img_black} alt="" className="w-[30px]" />
                <p>Upload Image</p>
              </div>
            )}
          </div>
        </label>
        <input
          onChange={handleImageLoad}
          type="file"
          id="image"
          hidden
          required
        />
      </div>
    </div>
  );
};
export default AddThumbnail;
