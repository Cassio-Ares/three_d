"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Geometry = ({ geometryForm }) => {
  const geometryRef = useRef();

  console.log(geometryForm);

  useFrame((state, delta) => {
    geometryRef.current.rotation.x += delta;
    geometryRef.current.rotation.y += delta;
  });
  return (
    <mesh ref={geometryRef}>
      {geometryForm}
    </mesh>
  );
};
