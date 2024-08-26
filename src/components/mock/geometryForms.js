export const GeometryForms = [
  {
    id: 1,
    label: "boxGeometry (Cubo)",
    args: "args={[width, height, depth]}",
    name: "boxGeometry",
    meshGeometry: (
      <>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color="#2196f3" /> {/* Azul */}
      </>
    ),
  },
  {
    id: 2,
    label: "sphereGeometry (Esfera)",
    args: "args={[radius, widthSegments, heightSegments]}",
    name: "sphereGeometry",
    meshGeometry: (
      <>
        <sphereGeometry args={[2, 26, 26]} />
        <meshStandardMaterial color="#4caf50" /> {/* Verde */}
      </>
    ),
  },
  {
    id: 3,
    label: "planeGeometry (Plano bidimensional)",
    args: "args={[width, height]}",
    name: "planeGeometry",
    meshGeometry: (
      <>
        <planeGeometry args={[5, 10]} />
        <meshStandardMaterial color="#ffeb3b" /> {/* Amarelo */}
      </>
    ),
  },
  {
    id: 4,
    label: "cylinderGeometry (Cilindro)",
    args: "args={[radiusTop, radiusBottom, height, radialSegments]}",
    name: "cylinderGeometry",
    meshGeometry: (
      <>
        <cylinderGeometry args={[2, 2, 5, 32]} />
        <meshStandardMaterial color="#9c27b0" /> {/* Roxo */}
      </>
    ),
  },
  {
    id: 5,
    label: "coneGeometry (Cone)",
    args: "args={[radius, height, radialSegments]}",
    name: "coneGeometry",
    meshGeometry: (
      <>
        <coneGeometry args={[2, 5, 32]} />
        <meshStandardMaterial color="#ff5722" /> {/* Laranja */}
      </>
    ),
  },
  {
    id: 6,
    label: "torusGeometry (Anel)",
    args: "args={[radius, tube, radialSegments, tubularSegments]}",
    name: "torusGeometry",
    meshGeometry: (
      <>
        <torusGeometry args={[3, 1, 16, 100]} />
        <meshStandardMaterial color="#3f51b5" /> {/* Indigo */}
      </>
    ),
  },
  {
    id: 7,
    label: "dodecahedronGeometry (Poliedro com 12 faces)",
    args: "args={[radius, detail]}",
    name: "dodecahedronGeometry",
    meshGeometry: (
      <>
        <dodecahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="#00bcd4" /> {/* Ciano */}
      </>
    ),
  },
  {
    id: 8,
    label: "tetrahedronGeometry (Poliedro com 4 faces)",
    args: "args={[radius, detail]}",
    name: "tetrahedronGeometry",
    meshGeometry: (
      <>
        <tetrahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="#8bc34a" /> {/* Verde Claro */}
      </>
    ),
  },
  {
    id: 9,
    label: "octahedronGeometry (Poliedro com 8 faces)",
    args: "args={[radius, detail]}",
    name: "octahedronGeometry",
    meshGeometry: (
      <>
        <octahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="#ff9800" /> {/* Laranja Claro */}
      </>
    ),
  },
  {
    id: 10,
    label: "icosahedronGeometry (Poliedro com 20 faces)",
    args: "args={[radius, detail]}",
    name: "icosahedronGeometry",
    meshGeometry: (
      <>
        <icosahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="#e91e63" /> {/* Rosa */}
      </>
    ),
  },
  {
    id: 11,
    label: "torusKnotGeometry (Estrutura complexa em forma de nó)",
    args: "args={[radius, tube, tubularSegments, radialSegments, p, q]}",
    name: "torusKnotGeometry",
    meshGeometry: (
      <>
        <torusKnotGeometry args={[3, 0.5, 100, 16, 2, 3]} />
        <meshStandardMaterial color="#673ab7" /> {/* Roxo Escuro */}
      </>
    ),
  },
  {
    id: 12,
    label: "circleGeometry (Círculo bidimensional)",
    args: "args={[radius, segments]}",
    name: "circleGeometry",
    meshGeometry: (
      <>
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial color="#607d8b" /> {/* Cinza Azul */}
      </>
    ),
  },
  {
    id: 13,
    label: "ringGeometry (Anel plano e sem o volume)",
    args: "args={[innerRadius, outerRadius, thetaSegments, phiSegments]}",
    name: "ringGeometry",
    meshGeometry: (
      <>
        <ringGeometry args={[2, 5, 32]} />
        <meshStandardMaterial color="#795548" /> {/* Marrom */}
      </>
    ),
  },
  // {
  //   id: 14,
  //   label: "tubeGeometry (Tubo em um caminho)",
  //   args: "args={[curve, tubularSegments, radius, radialSegments, closed]}",
  //   name: "tubeGeometry",
  //   meshGeometry: (
  //     <>
  //       {/* curve deve ser definida como uma curva de Three.js */}
  //       <tubeGeometry args={[curve, 20, 2, 8, false]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 15,
  //   label: "latheGeometry (Forma rotacionada de um perfil)",
  //   args: "args={[points, segments]}",
  //   name: "latheGeometry",
  //   meshGeometry: (
  //     <>
  //       {/* points deve ser uma lista de Three.Vector2 */}
  //       <latheGeometry args={[points, 12]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 16,
  //   label: "extrudeGeometry (Geometria extrudida)",
  //   args: "args={[shape, options]}",
  //   name: "extrudeGeometry",
  //   meshGeometry: (
  //     <>
  //       {/* shape deve ser uma forma de Three.js e options um objeto com configurações */}
  //       <extrudeGeometry args={[shape, { depth: 5, bevelEnabled: true }]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 17,
  //   label: "textGeometry (Renderizar texto em 3D)",
  //   args: "args={['Hello World', { font, size, height, curveSegments }]}",
  //   name: "textGeometry",
  //   meshGeometry: (
  //     <>
  //       <textGeometry args={['Hello World', { size: 80, height: 5, curveSegments: 12 }]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 18,
  //   label: "shapeGeometry (Geometria baseada em uma forma)",
  //   args: "args={[shape]}",
  //   name: "shapeGeometry",
  //   meshGeometry: (
  //     <>
  //       {/* shape deve ser uma forma de Three.js */}
  //       <shapeGeometry args={[shape]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 19,
  //   label: "polyhedronGeometry (Base para formas poliedrais personalizadas)",
  //   args: "args={[vertices, indices, radius, detail]}",
  //   name: "polyhedronGeometry",
  //   meshGeometry: (
  //     <>
  //       <polyhedronGeometry args={[[...vertices], [...indices], 3, 2]} />
  //       <meshStandardMaterial color="#f44336" />
  //     </>
  //   ),
  // },
  // {
  //   id: 20,
  //   label: "edgesGeometry (arestas de uma geometria)",
  //   args: "args={[geometry]}",
  //   name: "edgesGeometry",
  //   meshGeometry: (
  //     <>
  //       <edgesGeometry args={[new THREE.BoxGeometry(3, 3, 3)]} />
  //       <lineBasicMaterial color="black" />
  //     </>
  //   ),
  // },
  // {
  //   id: 21,
  //   label: "wireframeGeometry (wireframe de uma geometria)",
  //   args: "args={[geometry]}",
  //   name: "wireframeGeometry",
  //   meshGeometry: (
  //     <>
  //       <wireframeGeometry args={[new THREE.SphereGeometry(5, 32, 32)]} />
  //       <lineBasicMaterial color="black" />
  //     </>
  //   ),
  // },
  // {
  //   id: 22,
  //   label: "parametricGeometry (forma personalizada com função paramétrica)",
  //   args: "args={[parametricFunction, slices, stacks]}",
  //   name: "parametricGeometry",
  //   meshGeometry: (
  //     <>
  //       <parametricGeometry args={[parametricFunction, 25, 25]} />
  //       <meshStandardMaterial color="#8e44ad" />
  //     </>
  //   ),
  // },
  // {
  //   id: 23,
  //   label: "convexGeometry (invólucro convexo ao redor de pontos)",
  //   args: "args={[points]}",
  //   name: "convexGeometry",
  //   meshGeometry: (
  //     <>
  //       <convexGeometry args={[points]} />
  //       <meshStandardMaterial color="#e67e22" />
  //     </>
  //   ),
  // },
  // {
  //   id: 24,
  //   label: "decalGeometry (decalque sobre uma superfície)",
  //   args: "args={[mesh, position, orientation, size]}",
  //   name: "decalGeometry",
  //   meshGeometry: (
  //     <>
  //       <decalGeometry args={[mesh, position, orientation, size]} />
  //       <meshStandardMaterial color="#3498db" />
  //     </>
  //   ),
  // },
  // {
  //   id: 25,
  //   label: "instancedBufferGeometry (geometria otimizada para instâncias)",
  //   args: "args={[geometry, material, count]}",
  //   name: "instancedBufferGeometry",
  //   meshGeometry: (
  //     <>
  //       <instancedMesh args={[geometry, material, 100]} />
  //       <meshStandardMaterial color="#2ecc71" />
  //     </>
  //   ),
  // },
  // {
  //   id: 26,
  //   label: "bufferGeometry (geometria personalizada básica)",
  //   args: "args={[vertices, indices]}",
  //   name: "bufferGeometry",
  //   meshGeometry: (
  //     <>
  //       <bufferGeometry>
  //         <bufferAttribute attachObject={['attributes', 'position']} array={vertices} count={vertices.length / 3} itemSize={3} />
  //       </bufferGeometry>
  //       <meshStandardMaterial color="#95a5a6" />
  //     </>
  //   ),
  // },
];
