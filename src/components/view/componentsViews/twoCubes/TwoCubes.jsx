"use client";
import { Canvas } from "@react-three/fiber";
import { BoxCube } from "./BoxCube";
import { OrbitControls } from "@react-three/drei";

import './styles.css'

/**
 * Canvas componente que cria o contexto WebGl funciona como um container
 *
 * orbitControls permite controlar a câmera usando mouse
 */

/**
 * ambientLigth luz ambiente que ilumina a cena de forma uniforme se criar sombras
 *
 * intensity = {Math.PI / 2} define a intensidade da luz ambiente com metade de PI uma luz suave na cena
 *
 * <spotLigth> Uma luz direcional que cria um feixe cônico de luz, similar a um holofote
 *
 * position = posição da luz
 *
 * angle = angulo
 *
 * penumbra = define a suavidade das bordas
 *
 * decay = define a testura da luz
 *
 * intensity = define a intensidade da luz
 *
 * <pointLigth> luz emitida em todas as direções a partir de um ponto
 *
 * position = posição
 *
 * decay = sem atenuação
 *
 * intensity = intensidade
 *
 */

export const TwoCubes = () => {
  return (
    <div className="container_bk">
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
        <BoxCube position={[-6, 0, 0]} />
        <BoxCube position={[6, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
