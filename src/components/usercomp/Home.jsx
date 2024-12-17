import React from "react";
import Header from "./Header";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
        <Header />
        <ImgSlider />
        <Viewers />
      {/* Main Routes for the Home Page */}
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/imgslider" element={<ImgSlider />} /> {/* Fixed path */}
        <Route path="/viewers" element={<Viewers />} /> {/* Fixed path */}
      </Routes>
    </div>
  );
};

export default Home;
