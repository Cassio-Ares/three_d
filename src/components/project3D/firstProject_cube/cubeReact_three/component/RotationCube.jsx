"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const RotatingCube = () =>  {
  //useRef cria uma referência que pode ser usada para acessar o objeto no THREE.js 
  const cubeRef = useRef();

  // Animação do cubo
  //useFrame é um hook que permite atualizar a cena em cada frame de animação 
  useFrame(() => {

    // Atualiza a rotação do cubo em cada frame
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    // mesh é um componente que representa um objeto 3D
    //ref={cubeRef} é usado para acessar a animação 

    <mesh ref={cubeRef}>
       {/* boxGeometry define a forma do cubo com dimensões 1x1x1 */}
      <boxGeometry args={[3, 3, 3]} />

      {/* meshBasicMaterial define a aparência do cubo, aqui é verde */}
       <meshBasicMaterial /*color="green"*/ /> 
    </mesh>
  );
}
