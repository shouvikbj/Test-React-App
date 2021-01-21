import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Base from "./Base";
import { getDetails } from "./helper/coreapicalls";
import Card from "./Card";

const Home = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);

  const loadAllDetails = () => {
    getDetails()
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          data.reverse();
          setDetails(data);
          setError(false);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    setInterval(loadAllDetails, 1000);
    // loadAllDetails();
  }, []);

  const loadContent = () => {
    return (
      <div className="container">
        <div className="row">
          {details.map((detail, index) => {
            return (
              <div key={detail.id} className="mx-auto">
                <Card detail={detail} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const showError = () => {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <h4 className="text-danger">
          <span className="align-middle">Something went wrong!</span>
        </h4>
      </div>
    );
  };

  return (
    <Base>
      <br />
      <br />
      <br />
      <h1 className="text-center text-white">Home Component</h1>
      <br />
      {error ? showError() : loadContent()}
      <br />
      <br />
      <br />
      <br />
    </Base>
  );
};

export default Home;
