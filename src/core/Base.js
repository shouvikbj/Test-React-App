import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const Base = ({ className = "", children }) => {
  return (
    <div className={className}>
      <Navbar />
      <ToastContainer />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Base;
