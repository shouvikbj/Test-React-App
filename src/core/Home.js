import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Base from "./Base";
import { getDetails } from "./helper/coreapicalls";
import Card from "./Card";
import Login from "./Login";

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAuthStatus = () => {
    const userName = Cookies.get("userName");
    if (userName) {
      setAuth(true);
      setUser(userName);
      return true;
    }
  };

  const showMessage = () => {
    toast("Login First!", { type: "dark" });
  };

  const loadAllDetails = () => {
    getDetails()
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          data.reverse();
          setDetails(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    // toast("content is loading..", { type: "success" });
    getAuthStatus();
    setInterval(loadAllDetails, 1000);
    // loadAllDetails();
  }, []);

  const loadLoginPage = () => {
    return <Login />;
  };

  const loadContent = () => {
    return (
      <div>
        <h2 className="text-center text-white">Home</h2>
        <br />
        <div className="container">
          {loading ? (
            <div class="text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden"></span>
              </div>
            </div>
          ) : (
            <div className="row">
              {details.map((detail, index) => {
                return (
                  <div className="mx-auto">
                    <Card detail={detail} />
                  </div>
                );
              })}
            </div>
          )}
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
        <h4 className="text-warning">
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
      {error ? showError() : auth ? loadContent() : loadLoginPage()}
      <br />
      <br />
      <br />
      <br />
    </Base>
  );
};

export default Home;
