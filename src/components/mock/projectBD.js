import { CubeTwo } from "../project3D/firstProject_cube/cubeReact_three/CubeTwo";
import { CubeMove } from "../project3D/secondProject_cubeMove/CubeMove";


export const ComponentProjects = [
  {
    id: "1",
    imgSrc: "./cubeBasic.gif",
    nameProject: "Cube",
    component: <CubeTwo/>,
    text: "Primeiro projeto um cubo simples com rotação; fácil para aprender os primeiros conceitos da sintaxe 3D.",
  },
  {
    id: "2",
    imgSrc: "./cubeMove.gif",
    nameProject: "CubeMoveHover",
    component: <CubeMove/>,
    text: "Segundo projeto com evolução de conceitos para que o obj tenha hover, click e movimento controlado. Coloque o mouse sobre o elemento e tire, clique para ver ele mudando de tamanho e clique e segure o botão do mouse para mover o obj.",
  },
];
