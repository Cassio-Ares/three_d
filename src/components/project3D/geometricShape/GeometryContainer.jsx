"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Geometry } from "./Geometry";
import { SelectElement } from "./components/SelectElement";
import { GeometryForms } from "../../mock/geometryForms.js";
import "./styles.css";

export const GeometryContainer = () => {
  const [transformGeometry, setTransformGeometry] = useState(null);

  const handleChange = (event) => {
    setTransformGeometry(event.target.value);
  };

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
            checked={transformGeometry === geometry.name}
            onChange={handleChange}
          />
        ))}
      </form>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        {transformGeometry && (
          <Geometry geometryForm={getGeometryComponent(transformGeometry)} />
        )}
        {/* <perspectiveCamera position={[1, 1, 5]} /> */}
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
