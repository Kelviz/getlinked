import React from "react";

import Images from "../constants/Images";

const BannerOverlay = () => {
  return (
    <>
      <div className="banner-offset__overlay-img">
        <img
          className="banner-offset__overlay-img-1"
          src={Images.purpleCenter}
          alt="overlay-img"
        />
        <img
          className="banner-offset__overlay-img-2"
          src={Images.purpleRight}
          alt="overlay-img"
        />
      </div>
    </>
  );
};

export default BannerOverlay;
