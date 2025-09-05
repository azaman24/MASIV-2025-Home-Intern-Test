import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export default function My3DScene() {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="orange" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
}
