"use client";

import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model.jsx";
import { Ligth } from "./components/Ligth.jsx";
import { Plane } from "./components/Plane.jsx";
import { Environment } from "./components/Environment.jsx";
import { OrbitControls } from "@react-three/drei";

export const Object = () => {
  return (
    <Canvas
      shadows
      style={{ width: "100%", height: "100vh", background: "#ffffff" }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <OrbitControls
        enableDamping
        dampingFactor={0.5}
        minDistance={0.8}
        maxDistance={3}
      />
      <Ligth />
      <Model />
      <Plane />
      <Environment />
    </Canvas>
  );
};

/**
 * OrbitControls : permite o controle do objeto
 * 
 *   * enableDamping: amortece (suaviza os movimentos)
 * 
 *   * dampingFactor: controla a intensidade do amortecimento 
 * 
 *   * minDistance={0.8} e maxDistance={3}: permite controlar a distancia min e max da câmera em relação ao objeto 
 *                   efeito similar ao far e near na camera camera={{ position: [0, 0, 0], fov: 50, near: 1, far: 1000 }}
 */
