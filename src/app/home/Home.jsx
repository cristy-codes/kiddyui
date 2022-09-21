import "./home.css";
import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">{/* ROUTING */}</div>
    </div>
  );
};

export default Home;
