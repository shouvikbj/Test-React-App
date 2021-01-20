import React from "react";
// import { Link } from "react-router-dom";

const ImageHelper = ({ detail }) => {
  const imageurl = detail.image
    ? detail.image
    : `https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className="">
      <a href={imageurl}>
        <img
          id="imageHelper"
          src={imageurl}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="mb-1"
          alt=""
        />
      </a>
    </div>
  );
};

export default ImageHelper;
