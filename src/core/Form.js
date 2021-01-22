import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Base from "./Base";

import { api } from "../Backend";

const submitUrl = `${api}addData`;

const Form = () => {
  const [redirect, setRedirect] = useState(false);

  const viewForm = () => {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="mx-auto">
            <form
              id="myForm"
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
            >
              <div className="mb-3">
                <label className="form-label text-white">Title</label>
                <input
                  type="title"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="add title"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Text</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  name="text"
                  placeholder="add text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  accept="image"
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById("myForm");
    fetch(submitUrl, {
      method: "POST",
      body: new FormData(form),
      mode: "cors",
    }).then((data) => {
      console.log(data);
      form.reset();
      setRedirect(true);
    });
  };

  const redirectToHome = () => {
    return <Redirect to="/" />;
  };

  return (
    <Base>
      <br />
      <br />
      <br />
      <h1 className="text-center text-white">Add Data</h1>
      {viewForm()}
      {redirect ? redirectToHome() : ""}
    </Base>
  );
};

export default Form;
