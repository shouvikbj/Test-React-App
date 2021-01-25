import React, { useState, useEffect } from "react";
import Base from "./Base";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const showMessage = () => {
    toast("Login First!", { type: "dark" });
  };

  const loginForm = () => {
    return (
      <div className="container">
        <h3 class="text-center text-white">Login Page</h3>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="mx-auto">
            <form id="loginForm">
              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input
                  type="title"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="provide email"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const handleLogin = (event) => {
    event.preventDefault();
    var form = document.getElementById("myForm");
    // var email = form.elements[0].value;
    var email = document.getElementById("email").value;
    if (email == "") {
      toast("Email is required!", { type: "error" });
    } else {
      Cookies.set("userName", email);
      toast(`Welcome ${email}`, { type: "success" });
      setRedirect(true);
    }
  };

  const redirectToHome = () => {
    window.location.reload();
  };

  useEffect(() => {
    // showMessage();
  }, []);

  return (
    <Base>
      {loginForm()}
      {redirect ? redirectToHome() : ""}
    </Base>
  );
};

export default Login;
