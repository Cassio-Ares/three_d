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

/**
 * planeGeometry: define a geometria de um plano que é usado como base(chão) para o elemento
 *              args={[largura, altura]}
 * 
 * shadowMaterial: estiliza a sombra neste caso a opacidade da sombra = 0.2 de opacidade
 */