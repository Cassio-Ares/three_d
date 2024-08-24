"use client";

import { Canvas } from "@react-three/fiber";
import { BoxCube } from "./BoxCube";

export const CubeMove = () => {

  return (
    <div style={{width:'100%', height: '100vh'}}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <BoxCube position={[0,0,0]} />
      </Canvas>
    </div>
  );
};
