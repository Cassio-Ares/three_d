"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {GLTFLoader} from 'three-stdlib'

export const Model = () => {
    const gltf = useLoader(GLTFLoader, "./models/car_engine.glb");

  const { camera, controls } = useThree();

  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = box.getSize(new THREE.Vector3());

      camera.position.z = size.length() * 1.5;

    //   box.getCenter(controls.target);
    }
  },[gltf, camera, controls]);
  return(
    <primitive
      object={gltf.scene}
      ref={modelRef}
      dispose={null}
    />
  );
};
