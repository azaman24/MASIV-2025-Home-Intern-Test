import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import proj4 from "proj4";

function Calgary3DBuildings() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = 500;

    // Scene + Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd0e7f9);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(0, 300, 800);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(200, 500, 300);
    scene.add(dirLight);

    // Ground plane
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(3000, 3000),
      new THREE.MeshPhongMaterial({ color: 0x9ecb9e })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Projection: WGS84 → Web Mercator (meters)
    const projection = proj4("EPSG:4326", "EPSG:3857");

    // Fetch buildings
    const url = "https://data.calgary.ca/resource/uc4c-6kbd.geojson?$limit=200";

    fetch(url)
      .then((res) => res.json())
      .then((geojson) => {
        geojson.features.forEach((feature) => {
          if (feature.geometry.type === "Polygon") {
            const coords = feature.geometry.coordinates[0];
            const height = feature.properties.height || 20;

            const shape = new THREE.Shape();
            coords.forEach(([lon, lat], i) => {
              const [x, y] = projection.forward([lon, lat]);
              if (i === 0) shape.moveTo(x, y);
              else shape.lineTo(x, y);
            });

            const geometry = new THREE.ExtrudeGeometry(shape, {
              depth: height,
              bevelEnabled: false,
            });

            const material = new THREE.MeshPhongMaterial({
              color: new THREE.Color(`hsl(${Math.random() * 360}, 60%, 50%)`),
              opacity: 0.85,
              transparent: true,
            });

            const building = new THREE.Mesh(geometry, material);
            building.rotation.x = -Math.PI / 2;
            scene.add(building);
          }
        });
      });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: "80vw", height: "500px" }} />;
}

export default Calgary3DBuildings;