// // TestMap.jsx
// import { useEffect, useRef } from "react";
// import Map from "@arcgis/core/Map";
// import SceneView from "@arcgis/core/views/SceneView";
// import SceneLayer from "@arcgis/core/layers/SceneLayer";
// import Extent from "@arcgis/core/geometry/Extent";
// import SpatialReference from "@arcgis/core/geometry/SpatialReference";

// function TestMap() {
//   const mapRef = useRef(null);
//   const viewRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) return;

//     // Create map and scene view
//     const map = new Map({
//       basemap: "streets-vector",
//       ground: "world-elevation",
//     });

//     // Define an extent (WGS84) that covers roughly 3-4 downtown blocks.
//     // These bounds are chosen around Calgary Tower / downtown core:
//     // xmin (lon)  = -114.0660
//     // ymin (lat)  =  51.0420
//     // xmax (lon)  = -114.0580
//     // ymax (lat)  =  51.0480
//     // (These cover a small area in downtown Calgary — ~a few hundred metres across.)
//     const extent = new Extent({
//       xmin: -114.0660,
//       ymin: 51.0420,
//       xmax: -114.0580,
//       ymax: 51.0480,
//       spatialReference: SpatialReference.WGS84, // EPSG:4326
//     });

//     const view = new SceneView({
//       container: mapRef.current,
//       map,
//       viewingMode: "local",
//       // set camera roughly centered on Calgary Tower-ish area
//       camera: {
//         position: {
//           // camera position here uses geographic lon/lat for convenience
//           x: -114.062019, // lon (Calgary Tower ~ reference). Source: City coords. :contentReference[oaicite:2]{index=2}
//           y: 51.04427,    // lat
//           z: 450,         // meters above ground
//         },
//         tilt: 60,
//         heading: 0,
//       },
//       extent, // initial constrained extent
//       ui: { components: ["compass", "attribution"] }, // minimal UI
//     });

//     // Lock navigation to the small extent and prevent zooming/rotation outside
//     // We set minZoom and maxZoom to the current zoom after view is ready.
//     view.when(() => {
//       // restrict panning to the extent
//       view.constraints.geometry = extent;

//       // lock zoom by setting minScale/maxScale to current scale
//       const currentScale = view.scale;
//       view.constraints.minScale = currentScale;
//       view.constraints.maxScale = currentScale;

//       // optionally disable rotation and tilt gestures if desired:
//       view.constraints.rotationEnabled = false;
//       // disable zoom via mouse wheel / touch pinch:
//       view.on("mouse-wheel", (e) => e.stopImmediatePropagation());
//       view.on("double-click", (e) => e.stopImmediatePropagation());
//       // also ignore pinch/scroll on touch
//       view.on("key-down", (e) => {
//         // prevent +/- keys from zooming
//         const forbidden = [187, 189]; //  + and - keycodes (some browsers)
//         if (forbidden.includes(e.keyCode)) e.stopImmediatePropagation();
//       });
//     });

//     // Add Calgary 3D SceneLayer (SceneServer). This is the City-hosted Scene service.
//     // Use the SceneServer endpoint (no /layers/0 — SceneLayer accepts a SceneServer URL).
//     const buildingsLayer = new SceneLayer({
//       url:
//         "https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/3D_Buildings_Citywide/SceneServer",
//       title: "Calgary 3D Buildings",
//     });
//     map.add(buildingsLayer);

//     viewRef.current = view;

//     return () => {
//       if (viewRef.current) {
//         viewRef.current.destroy();
//         viewRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
//       <div
//         style={{
//           width: "80vw",
//           maxWidth: "1400px",
//           height: "60vh",
//           borderRadius: 20,
//           overflow: "hidden",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//           background: "#fff",
//         }}
//       >
//         <h2 style={{ margin: 8, textAlign: "center" }}>Calgary (3–4 blocks)</h2>
//         <div
//           ref={mapRef}
//           style={{ width: "100%", height: "calc(100% - 40px)" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default TestMap;