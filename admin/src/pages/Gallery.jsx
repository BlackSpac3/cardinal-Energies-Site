import { useState } from "react";
import ViewGallery from "../components/gallery_page_components/ViewGallery.jsx";
import UploadImagePage from "../components/gallery_page_components/UploadImagePage.jsx";
const Gallery = () => {
  const [galleryState, setGalleryState] = useState("view");
  return galleryState == "view" ? (
    <ViewGallery setState={setGalleryState} />
  ) : (
    <UploadImagePage setState={setGalleryState} />
  );
};

export default Gallery;
