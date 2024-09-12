"use client";

export const ShadowPlane = () => {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  );
};


