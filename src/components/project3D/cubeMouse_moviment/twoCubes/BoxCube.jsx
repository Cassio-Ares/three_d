"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export const BoxCube = (props) => {
  const [hovered, hover] = useState(false); // state para contrar o cor de elemento a partir de um hover
  const [clicked, click] = useState(false); // state usado como booleana para armazenar um valor

  const ref = useRef(); // hook que armazena a referência para o obj 3D <mesh> podendo manipular a rotação

  useFrame((state, delta) => (ref.current.rotation.x += delta));
  /**
   * useFrame hook do "@react-three/fiber"  permita executar uma função em cada frame
   * similar ao requestAnimationFrame
   *
   * dalta armazena o tempo que passo desde o ultimo frame para uma animação suave
   */

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[8, 8, 8]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

/**
 * {...props} espalha todas as propriedades passadas para o componente permite personalizar BoxCube
 *
 *
 * ref={ref} associa ref a mesh e permite a sua manipulação neste caso a rotação 
 * 
 * scele = ajusta a scala do elemento 
 * 
 * onClick={(event) => click(!clicked)} altera o estado do elemento de clicked entre true e false 
 * 
 * 
 *   Manipuladores do hover (ex: mouse over e mouse out)
 *   onPointerOver={(event) => (event.stopPropagation(), hover(true))}
     onPointerOut={(event) => hover(false)}
 */
