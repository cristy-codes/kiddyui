import "./home.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../dashboard";
import TypingActivity from "../typing-activity/TypingActivity";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity/typing" element={<TypingActivity />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
