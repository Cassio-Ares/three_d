"use client";

export const Ligth = () => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[2, 2, 2]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-heigth = {2048}
        shadow-bias = {-0.001}
      />
    </>
  );
};

/**
 * ambientLigth:  é uma luz ambiente que ilumina todos os objetos na cena de maneira uniforme
 *   props:
 *        * color: define a cor da luz
 *        * intensity: define a intensidade da luz valor padrão 1
 *  
 *  directionalLigth:
 *      props:
 *        * color: define a cor da luz
 *        * intensity: define a intensidade da luz valor padrão 1
 *        * position: define a posição da luz no espaço 3D
 *        * castShadow: se definido como true a luz gerará sombra 
 *        * shadow.mapSize: define uma resolução e qualidade da sombra
 *        * shadow.camera: permite ajustar os parametros da câmera que captura sombras como:
 *                                                                     near, far, left, right, top, e bottom
 */
