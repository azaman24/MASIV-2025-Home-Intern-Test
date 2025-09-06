import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// https://maps.calgary.ca/3ddigitalcalgary/

function CalgaryMap() {
  return (
    <div style={{ display: "flex", justifyContent: "center", borderRadius: "15%"  }}>
      <div style={{ width: "80vw", borderRadius: "15%" }}>
        <iframe
          src="https://maps.calgary.ca/3ddigitalcalgary/"
          width="100%"
          height="600vh"
          style={{ border: "none", borderRadius: "15px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default CalgaryMap;

// https://maps.calgary.ca/3ddigitalcalgary/
