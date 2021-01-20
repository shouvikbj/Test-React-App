import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState({
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
  });

  const { navbarState, navbarClass } = nav;

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
              <Link className="nav-link" to="/form">
                Add Data
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
