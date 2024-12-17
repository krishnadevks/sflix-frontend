import React from "react";
import "./Viewers.css";

function Viewers() {
  return (
    <div className="viewers">
      <div className="viewer">
        <img src="path/to/movie1.jpg" alt="Movie 1" />
        <p>1000 Views</p>
      </div>
      <div className="viewer">
        <img src="path/to/movie2.jpg" alt="Movie 2" />
        <p>2000 Views</p>
      </div>
      {/* Add more viewers here */}
    </div>
  );
}

export default Viewers;
