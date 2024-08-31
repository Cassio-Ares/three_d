"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Light } from "./components/Light";
import { Model } from "./components/Model";

export const Object = () => {
  return (
    <Canvas                               
      camera={{ position: [0, 0, 0], fov: 50, near: 1, far: 1000 }}   
      style={{ width: "100%", height: "100vh", background: "#f5eeee" }} 
    >
       <OrbitControls /> {/*da liberdade para movimentar o elemento com mouse */}
      <Model /> {/* traz o obj para ser renderizado na tela */}
      <Light/> {/* traz a iluminação da o Canvas */}
    </Canvas>
  );
};

/**
 * camera={{ position: [0, 0, 0], fov: 50, near: 1, far: 1000 }} 
 * 
 * * position = posição da câmera 
 * 
 * * fov =  campo de visão, define o campo de visão da câmera em graus (obs: valores menores resulta em zoom)
 * 
 * * near = menor distancia que o elemento pode ficar da câmera 
 * 
 * * far = maior distancia que o elemento pode ficar da câmera 
 */