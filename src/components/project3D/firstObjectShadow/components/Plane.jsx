"use client";

import { useLoader } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { ShadowMaterial } from "three";

extend({ ShadowMaterial });

export const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  );
};


