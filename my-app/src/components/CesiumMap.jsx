// src/components/CesiumMap.jsx
import React, { useEffect, useRef, useState } from "react";
import * as Cesium from "cesium";

function CesiumMap({ onBuildingClick }) {
  const mapRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Create the Cesium Viewer
    viewerRef.current = new Cesium.Viewer(mapRef.current, {
      terrainProvider: Cesium.createWorldTerrain(),
      scene3DOnly: true,
      selectionIndicator: false,
      baseLayerPicker: true,
    });

    // Example: fly camera to Calgary
    viewerRef.current.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-114.0719, 51.0447, 5000), // Calgary coords
    });

    // Add click handler for buildings
    const handler = new Cesium.ScreenSpaceEventHandler(viewerRef.current.scene.canvas);
    handler.setInputAction((movement) => {
      const pickedFeature = viewerRef.current.scene.pick(movement.position);
      if (pickedFeature && pickedFeature.getProperty) {
        const info = {
          name: pickedFeature.getProperty("name") || "Unknown",
          height: pickedFeature.getProperty("height") || "N/A",
        };
        onBuildingClick(info);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    return () => {
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
      }
    };
  }, [onBuildingClick]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}

export default CesiumMap;