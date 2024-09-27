"use client";

import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { ColorPicker } from "./components/ColorPicker.js";
import { ColorProvider } from "./components/ColorProvider.js";
import { Sphere } from "./components/Sphere.js";
import { OrbitControls } from "@react-three/drei";

export const ChangingColors = () => {
  return (
    <ColorProvider>
      <main className="container_Changing">
        <div className="container3d">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere />
            <OrbitControls/>
          </Canvas>
        </div>
        <div className="container_choice">
          <ColorPicker />
        </div>
      </main>
    </ColorProvider>
  );
};
//OBS para poder usar o useContext preciso trazer o Provider (colocar o children para receber as props)
