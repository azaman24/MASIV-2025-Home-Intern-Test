import { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

function TestMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    let view;

    // Load ArcGIS API modules
    loadModules(
      ["esri/Map", "esri/views/SceneView", "esri/layers/FeatureLayer"],
      { css: true }
    ).then(([ArcGISMap, SceneView, FeatureLayer]) => {
      // Create a map with 3D ground
      const map = new ArcGISMap({
        basemap: "streets",
        ground: "world-elevation",
      });

      // Create a 3D view
      view = new SceneView({
        container: mapRef.current,
        map: map,
        center: [-114.0719, 51.0447], // Calgary
        zoom: 14,
      });

      // Load Calgary’s official 3D Buildings layer
      const buildingsLayer = new FeatureLayer({
        url: "https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/3D_Buildings_Citywide/FeatureServer/0",
      });

      map.add(buildingsLayer);
    });

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>Calgary 3D Buildings</h2>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default TestMap;
