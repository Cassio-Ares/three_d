"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export const BoxCube = (props) => {
 const [hover, setHover] = useState(false);
 const [click, setClick] = useState(false);

  const ref = useRef(); // hook para armazenar obj <mesh>

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
      onPointerOver={(event)=> (event.stopPropagation(), setHover(true))}
      onPointerOut={(event)=> setHover(false)}

      scale={click ? 1.5 : 1}
      onClick={(event)=> setClick(!click)}
      >
      <boxGeometry args={[2,2,2]}/>
      <meshStandardMaterial color={hover ? "green" : "blue"}/>
      <OrbitControls/>
    </mesh>
  );

};
