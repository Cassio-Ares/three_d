"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box3, Vector3 } from "three";
import { GLTFLoader } from "three-stdlib";

export const Model = () => {
  /**
   * useLoader: hook do @react-fiber que carrega recursos 3D externos
   *
   * GLTFLoader: loader usada para carregar arquivos glb, gltf qua são formatos amplamente usados
   */
  const gltf = useLoader(GLTFLoader, "/models/office_chair.glb");

  /**
   * useRef = hook do react que cria uma referência mutável,
   *         que persiste entre renderizações e permite manipular o elemento 3D
   */
  const modelRef = useRef();

  /**
   *useThree() = hook do @react-three/fiber que permite acessar o contexto da cena 3D como [câmere, scene, controls, render, ...]
   *             ele fornece acesso as instancias  Three.js(props  Three.js) usadas dentro do Canvas
   *   * camera: permita acesso e controle da camera
   *
   *   * scene: sena 3D onde objetos, luzes e modelos são renderizados
   *
   *   * gl: o renderizador WEBGL (THREE.WebGLRenderer) usado para desenhar a cena no canvas HTML
   *
   *   * size: as dimensões como Width, heigth
   *
   *   * viewport: tamanho visível da área renderizada
   *
   *   * clock: um relogio interno que pode ser usado para controlar animação baseada em tempo
   *
   *   * controls: algum tipo de controle como <OrbitControls />
   */
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      /**
       * Box3: cria uma caixa 3D e é usado para calcular o tamanho e os limites de um objeto
       *
       * max: Vector3 {x: -infinity, y: -infinity, z:-infinity}
       * min: Vector3 {x: -infinity, y: -infinity, z: -infinity}
       *
       * setFromObject: aqui, ele calcula a caixa em torno do modelo 3D carregado.
       *
       * max: Vector3 {x: 0.3391248594414833, y: 0.5308156767263627, z: 0.3608405542901378}
       * min: Vector3 {x: -0.3391248594414833, y: -0.5308156767263627, z: -0.3608405542901378}
       */
      const box = new Box3().setFromObject(modelRef.current);

      /**
       * getSize: retorna o tamanho da caixa delimitadora como um vetor
       *
       * Vector3: é usado para armazenar e manipular coordenadas espaciais em X, Y, Z.
       */
      const size = box.getSize(new Vector3());

      /**
       * position.z: ajusta a camera ao longo do eixo Z com base no tamanho do modelo
       */
      camera.position.z = size.length() * 1.5;

      /**
       * traverse: metodo que percorre todos os filhos de um objeto 3D aplicando uma função a cada um deles
       * 
       * child.isMesh: verifica se o elemento é um objeto 3D que pode ser renderizado
       * 
       * castShadow, receiveShadow: castShadow: fazem com que o objeto projete sombra enquanto renderizado
       */
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf, camera]);

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      dispose={null}
      castShadow
      receiveShadow
    />
  );
};
