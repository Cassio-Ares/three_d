"use client";

import { Canvas } from "@react-three/fiber";
import { RotatingCube } from "./component/RotationCube";


/**
 *  yarn add @react-three/fiber three
 */

export const CubeTwo = () => {
  return (
    <>
       {/* Canvas é um componente de container principal para a cena */}
      <Canvas
        camera={{position: [0,0,10], fov: 50}}
        style={{width: '100vw', height:'100vh'}}
      >
        {/* RotatingCube é o componente que cria e anima o cubo */}
        <RotatingCube />

        {/* perspectiveCamera define a câmera com uma perspectiva 3D */}
        <perspectiveCamera position={[1, 1, 5]} />
      </Canvas>
    </>
  );
};
