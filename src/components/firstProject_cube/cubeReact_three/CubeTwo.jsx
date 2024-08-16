"use client";

import { Canvas } from "@react-three/fiber";
import { RotatingCube } from "./component/RotationCube";
import { Container } from "@/components/container/Container";

/**
 *  yarn add @react-three/fiber three
 */

export const CubeTwo = () => {
  return (
    <Container>
       {/* Canvas é um componente de container principal para a cena */}
      <Canvas>
        {/* RotatingCube é o componente que cria e anima o cubo */}
        <RotatingCube />

        {/* perspectiveCamera define a câmera com uma perspectiva 3D */}
        <perspectiveCamera position={[0, 0, 5]} />
      </Canvas>
    </Container>
  );
};
