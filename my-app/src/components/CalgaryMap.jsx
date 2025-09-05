import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// https://maps.calgary.ca/3ddigitalcalgary/

function CalgaryMap() {
  return (
    <div>
      <h2>Calgary 3D Map</h2>
      <iframe
        src="https://maps.calgary.ca/3ddigitalcalgary/"
        width="100%"
        height="400px"
        style={{ border: "none" }}
        title="3D Digital Calgary Map"
      ></iframe>
    </div>
  );
}

export default CalgaryMap;

// https://maps.calgary.ca/3ddigitalcalgary/
