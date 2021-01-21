import React from "react";
import ImageHelper from "./helper/ImageHelper";
// import LazyLoad from "react-lazyload";

const Card = ({ detail }) => {
  return (
    <div className="card m-3" style={{ maxWidth: "30rem" }}>
      <ImageHelper detail={detail} />
      <div className="card-body">
        <h5 className="card-title text-primary">{detail.title}</h5>
        <p className="card-text">{detail.text}</p>
      </div>
    </div>
  );
};

export default Card;
