"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box3, Vector3 } from "three";
import { GLTFLoader } from "three-stdlib";

export const Model = () => {
  const gltf = useLoader(GLTFLoader, "./models/office_chair.glb");

  const modelRef = useRef();

  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const size = box.getSize(new Vector3());

      camera.position.z = size.length() * 1.5;

      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf, camera]);

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      dispose={null}
      castShadow
      receiveShadow
    />
  );
};
