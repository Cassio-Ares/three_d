"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Geometry } from "./Geometry";
import { SelectElement } from "./components/SelectElement";
import { GeometryForms } from "../../mock/geometryForms.js";
import "./styles.css";

export const GeometryContainer = () => {
  //state para armazenar a geometry escolhida
  const [transformGeometry, setTransformGeometry] = useState(null);

  /**
   * função chamada quando o usuario seleciona algo no input
   *
   * event.target.value = evento é o obj desparado, target é o elemento que disparou e evento (input radio),
   *                      value é o valor associado.
   *
   */

  const handleChange = (event) => {
    setTransformGeometry(event.target.value);
  };

  /**
   * função que recebe o nome da geometria escolhida
   * apos isso faz uma busca no array onde estão os geometry e retorna o elemento que corresponde ao nome
   */
  const getGeometryComponent = (geometryName) => {
    const selected = GeometryForms.find(
      (geometry) => geometry.name === geometryName
    );
    return selected ? selected.meshGeometry : null;
  };

  return (
    <>
      <form className="form">
        {GeometryForms.map((geometry) => (
          <SelectElement
            key={geometry.id}
            label={geometry.label}
            name="geometry"
            value={geometry.name}
            checked={transformGeometry === geometry.name} // verifica se o input checked é o mesmo armazenado no state
            onChange={handleChange} // evento disparado quando o usuario clica no input
          />
        ))}
      </form>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }} //fov angulo de visão da camera medido em graus quanto maior mais aberto e quanto menor mais zoon
        style={{ width: "100vw", height: "100vh" }}
      >
        {transformGeometry && (
          <Geometry geometryForm={getGeometryComponent(transformGeometry)} /> //envia por props o component mesh que deve ser renderizado
        )}
        {/* iluminação nescessaria para mostrar os elemento sendo <ambientLight> luz ambiente, <spotLight/> luz como se fosse um holoforte e <pointLight/> mais um ponto de luz  */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      </Canvas>
    </>
  );
};

/**
 * Ajuste do fov: O fov é passado como um dos parâmetros da câmera em React Three Fiber (ou Three.js). Neste exemplo, fov: 50 define um campo de visão de 50 graus.
 * Escolhendo o Valor do fov:
 *    *fov baixo (menor que 50): Útil para focar em detalhes específicos ou dar a sensação de zoom (campo de visão estreito).
 *    *fov médio (em torno de 50): Um valor comum para visualizações que querem um equilíbrio entre campo de visão amplo e foco nos detalhes.
 *    *fov alto (maior que 50): Útil para capturar cenas amplas e proporcionar uma visão geral do ambiente.
 */
