"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

export const Model = () => {
  /**
   * useLoader: hook do @react-three que carrega recurso externos 3D.
   *
   * GLTFLoader: é um utilitário da biblioteca three-stdlib que permite carregar modelos no formato GLTF/GLB
   *             formato eficiente para transmição 3D que carrega consigo: animação, textura, ...
   */
  const gltf = useLoader(GLTFLoader, "./models/car_engine.glb");

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

  /**
   * useRef: hook do react que cria uma referencia mutavel que pode ser usado para acessar diretamente o DOM
   *         ou objetos em uma renderização; criando uma variavel que permite acessar e manipular o objeto 3D.
   */
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      /**
       * Box3 : cria um container de caixa 3D ao redor do elemento é util para calcular e pegar o tamanho
       *        e posição espacial de um objeto 3D
       *
       * setFromObject: define os limites da caixa 3D ele define neste caso o limite baseado em um objeto Three.js
       *                carregado (modelRef.current)
       */
      const box = new THREE.Box3().setFromObject(modelRef.current);

      /**
       * getSize(vector): calcula o tamanho (dimensões) da caixa 3D e retorna como um
       *                   Vector3 contendo a largura, altura e profundidade.
       *
       * THREE.Vector3(): é uma classe que representa um vetor 3D com componentes X, Y, Z
       *                  usado para posicionar objetos, calcular distâncias e realizar transformações
       */
      const size = box.getSize(new THREE.Vector3());

      camera.position.z = size.length() * 1.5;

      //   box.getCenter(controls.target);
    }
  }, [gltf, camera]);
  return <primitive object={gltf.scene} ref={modelRef} dispose={null} />;
};
/**
 * primitive : componente especial do @react-three que permite renderizar diretamente objetos
 *             dentro de uma cena,
 *           PROPS:
 *           * object ={} define a scene 3D carregada
 *
 *           * ref={} atribui a referência modelRef ao objeto para que ele possa ser manipulado diretamente
 *
 *           * dispose={}  define que o objeto não deve ser descartado automaticamente 
 * 
 */
