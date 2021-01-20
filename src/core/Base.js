import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Base = ({ className = "", children }) => {
  return (
    <div className={className}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Base;
