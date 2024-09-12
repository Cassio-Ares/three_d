"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { DirectionalLight } from "./DirectionalLight";
import { MotoModel } from "./MotoModel";
import { RGBELoader } from "three-stdlib";
import { ShadowPlane } from "./ShadowPlane";
import * as THREE from "three";
import { useEffect } from "react";

export const Scene = () => {
  const { scene } = useThree(); // Acessa o contexto da cena

  // Carrega o HDR usando RGBELoader
  const hdrTexture = useLoader(RGBELoader, "./utils/photo_studio_01_2k.hdr");
  hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = hdrTexture;

  useEffect(() => {
    if (!hdrTexture) {
      console.error("Erro ao carregar HDR");
    }
  }, [hdrTexture]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        intensity={1} // Aumentando a intensidade da luz direcional
        position={[5, 5, 5]} // Mudando a posição para iluminar melhor o modelo
        castShadow
      />
      <MotoModel />
      <ShadowPlane />
    </>
  );
};
