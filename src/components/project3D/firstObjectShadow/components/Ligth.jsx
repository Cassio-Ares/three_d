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


