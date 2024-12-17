import React, { useState, useEffect } from "react";
import "./ImgSlider.css";

function ImgSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="img-slider">
      <img src={images[currentIndex]} alt="Slider Image" />
    </div>
  );
}

export default ImgSlider;
