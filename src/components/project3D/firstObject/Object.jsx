"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Light } from "./components/Light";
import { Model } from "./components/Model";

export const Object = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50, near: 1, far: 1000 }}
      style={{ width: "100%", height: "100vh", background: "#8b8b8b" }}
    >
      <OrbitControls />
      <Model />
      <Light/>
    </Canvas>
  );
};
