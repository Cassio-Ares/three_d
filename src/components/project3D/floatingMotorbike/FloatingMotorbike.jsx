"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";

export const FloatingMotorbike = () => {
  return (
    <Canvas
     shadows 
     camera={{ position: [0, 0, 15], far: 1000, fov: 45 }}
     style={{ width: "100%", height: "100vh", background: "#ffffff" }}
     >
      <Scene />
      <OrbitControls
        enableDamping
        dampingFactor={0.5}
        minDistance={4}
        maxDistance={7}
      />
    </Canvas>
  );
};
