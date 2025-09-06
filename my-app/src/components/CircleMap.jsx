// src/components/CircleMap.jsx
import React from "react";

function CircleMap() {
  return (
    <div
      style={{
        marginTop: "100px",
        width: "500px",      // set size of circle
        height: "500px",     // keep width and height equal
        borderRadius: "50%", // makes it a circle
        overflow: "hidden",  // clips map inside circle
        border: "5px solid #ccc", // optional border
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // optional shadow
      }}
    >
      <iframe
        title="map"
        src="https://maps.calgary.ca/3ddigitalcalgary/"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default CircleMap;