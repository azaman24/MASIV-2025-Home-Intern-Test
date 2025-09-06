// src/pages/Map.jsx
// src/pages/Map.jsx
import React from "react";

function Map() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Left Overlay */}
      <div
        style={{
          width: "20%",
          padding: "20px",
          backgroundColor: "rgba(245, 245, 245, 0.9)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h3>Location</h3>
        <input
          type="text"
          placeholder="Search location..."
          style={{
            padding: "10px",
            fontSize: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <p>Click on a building for more information.</p>
      </div>

      {/* Map in the middle */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", borderRadius: "15%" }}>
          <iframe
            src="https://maps.calgary.ca/3ddigitalcalgary/"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "15px" }}
            title="Calgary 3D Map"
          ></iframe>
        </div>
      </div>

      {/* Right Overlay */}
      <div
        style={{
          width: "20%",
          padding: "20px",
          backgroundColor: "rgba(245, 245, 245, 0.9)",
        }}
      >
        <h3>Building Info</h3>
        <p>Select a building to see details.</p>
      </div>
    </div>
  );
}

export default Map;






// // src/pages/Map.jsx
// import React, { useState } from "react";

// function Map() {
//   const [selectedBuilding, setSelectedBuilding] = useState(null);

//   // This simulates clicking on a building
//   const handleBuildingClick = (building) => {
//     setSelectedBuilding(building);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
//       {/* Left Overlay */}
//       <div
//         style={{
//           width: "20%",
//           padding: "20px",
//           backgroundColor: "rgba(245, 245, 245, 0.9)",
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//         }}
//       >
//         <h3>Location</h3>
//         <input
//           type="text"
//           placeholder="Search location..."
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <p>Click on a building for more information.</p>
//       </div>

//       {/* Map in the middle */}
//       <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//         <div style={{ width: "80%", borderRadius: "15%" }}>
//           <iframe
//             src="https://maps.calgary.ca/3ddigitalcalgary/"
//             width="100%"
//             height="600vh"
//             style={{ border: "none", borderRadius: "15px" }}
//             title="Calgary 3D Map"
//             onLoad={() => console.log("Map loaded")}
//           ></iframe>
//         </div>
//       </div>

//       {/* Right Overlay */}
//       <div
//         style={{
//           width: "20%",
//           padding: "20px",
//           backgroundColor: "rgba(245, 245, 245, 0.9)",
//           display: selectedBuilding ? "block" : "none",
//         }}
//       >
//         <h3>Building Info</h3>
//         {selectedBuilding ? (
//           <div>
//             <p><strong>Name:</strong> {selectedBuilding.name}</p>
//             <p><strong>Details:</strong> {selectedBuilding.details}</p>
//           </div>
//         ) : (
//           <p>Select a building to see details.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Map;
