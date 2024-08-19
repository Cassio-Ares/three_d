"use client";
import { Container } from "@/components/container/Container";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Cube = () => {
  // Cria uma referência para a div onde o Three.js vai renderizar a cena
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, mesh;

    function init() {
      // Configura a câmera de perspectiva
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
      camera.position.z = 400;

      // Cria uma nova cena
      scene = new THREE.Scene();

      // Configura o renderer com a resolução do monitor e o tamanho do contêiner
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // Adiciona o canvas do renderer à div referenciada
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Cria a geometria e o material da caixa, e a adiciona à cena
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      const material = new THREE.MeshBasicMaterial({ color: '#ffffff'});
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }

    function render() {
      // Atualiza a cada frame
      requestAnimationFrame(render);

      // Rotaciona a caixa
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.005;

      // Renderiza a cena a partir da perspectiva da câmera
      renderer.render(scene, camera);
    }

    // Chama a função de inicialização
    init();

    // Começa o loop de renderização
    render();

    // Limpa o canvas ao desmontar o componente
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Container>
      {/* Essa div será usada para renderizar o conteúdo do Three.js */}
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
    </Container>
  );
};
