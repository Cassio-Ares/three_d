"use client";

import { useRef } from "react";
import { useColor } from "./ColorProvider";
import { useFrame } from "@react-three/fiber";

export const Sphere = () => {
  const { color } = useColor();
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
