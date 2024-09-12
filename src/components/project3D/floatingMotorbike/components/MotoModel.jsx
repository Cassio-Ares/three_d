"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three'

export const MotoModel = () => {
  const { scene: model } = useGLTF("./models/sci-fi_flying_scooter.glb");
 
  //ref do modelo para animação
  const modelRef = useRef(model);
  model.scale.set(1.5, 1.5, 2); // Aumentando a escala
  model.position.set(0,-1.5, 0)// Mover o modelo para baixo no eixo Y
  model.rotation.set(THREE.MathUtils.degToRad(10), 10, 0); // Rotaciona 10 graus no eixo X
  console.log(model)

 // Define a escala e ativa as sombras no modelo

  model.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  let clock = 0; // Variável para controlar o tempo

  useFrame(() => {
    if (modelRef.current) {
      // Animação de flutuação mais suave com uma função senoidal
      clock += 0.02; // Controla a velocidade da animação
      const amplitude = 0.08; // Define a altura máxima da flutuação
      const frequency = 0.5; // Controla a frequência da flutuação
      modelRef.current.position.y = -1 + Math.sin(clock * frequency) * amplitude;
    }
  });

  return <primitive ref={modelRef} object={model} />;
};


