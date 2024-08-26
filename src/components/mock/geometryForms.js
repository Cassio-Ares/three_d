import * as THREE from 'three'; 

export const GeometryForms = [
  {
    id: 1,
    label: 'boxGeometry (Cubo)',
    args: 'args={[width, height, depth]}',
    name: 'boxGeometry',
    meshGeometry: (
      <>
        <primitive object={new THREE.BoxGeometry(3, 3, 3)} />
        <meshBasicMaterial color="#2196f3" />
      </>
    ),
  },
  {
    id: 2,
    label: 'sphereGeometry (Esfera)',
    args: 'args={[radius, widthSegments, heightSegments]}',
    name: 'sphereGeometry',
    meshGeometry: (
      <>
        <primitive object={new THREE.SphereGeometry(1, 32, 32)} />
        <meshStandardMaterial color="#f44336" />
      </>
    ),
  },
];
