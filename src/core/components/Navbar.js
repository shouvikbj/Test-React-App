import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [nav, setNav] = useState({
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
  });

  const { navbarState, navbarClass } = nav;

  const getAuthStatus = () => {
    const userName = Cookies.get("userName");
    if (userName) {
      setAuth(true);
      return true;
    }
  };

  const myToggler = () => {
    navbarState
      ? setNav({
          ...nav,
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : setNav({
          ...nav,
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        });
  };

  const handleLogout = () => {
    Cookies.remove("userName");
    toast("Logged out!", { type: "info" });
    window.location.reload();
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" onClick={myToggler}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={navbarClass} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {auth ? (
                <Link className="nav-link" to="/form">
                  Add Data
                </Link>
              ) : (
                ""
              )}
              {auth ? (
                <Link className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
