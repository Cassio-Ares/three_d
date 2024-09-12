"use client";

import { useRef } from "react";

export const DirectionalLight = () => {
  // comando de luz direcional
  const ligthRef = useRef();

  return (
    <directionalLight
      ref={ligthRef}
      intensity={0.7} // Aumentando um pouco a intensidade
      position={[2, 5, 2]} // Ajustando a posição da luz para incidir melhor no modelo
      castShadow
      shadow-bias={-0.0005} // Aumentando o bias para evitar artefatos de sombra
      shadow-mapSize-width={4096} // Aumentando a resolução do mapa de sombra
      shadow-mapSize-height={4096}
      shadow-camera-near={0.5} // Ajustando os limites da câmera de sombra
      shadow-camera-far={50} // Ajustando o alcance da sombra
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  );
};
