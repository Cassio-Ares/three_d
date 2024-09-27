import { ChangingColors } from "../project3D/changingColors/ChangingColors";
import { Object } from "../project3D/firstObject/Object";
import { ObjectShadow } from "../project3D/firstObjectShadow/ObjectShadow";
import { CubeTwo } from "../project3D/firstProject_cube/cubeReact_three/CubeTwo";
import { FloatingMotorbike } from "../project3D/floatingMotorbike/FloatingMotorbike";
import { GeometryContainer } from "../project3D/geometricShape/GeometryContainer";
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
  {
    id: "3",
    imgSrc: "./geometry.gif",
    nameProject: "GeometricShape",
    component: <GeometryContainer/>,
    text: "Projeto para mostrar algumas das forma geometricas basicas que podemos fazer com @react-three; clique nos nomes e veja as formas; para mais informação olhe o mock/geometryForms.js no repositorio.",
  },
  {
    id: "4",
    imgSrc: "./firstObject.gif",
    nameProject: "FirstObject",
    component: <Object/>,
    text: "Colocação do primeiro objeto 3D na tela e usando recursos como GLTFLoader(para carregar o objeto) e primitive para colocar o objeta na tela.",
  },
  {
    id: "5",
    imgSrc: "./shadow.gif",
    nameProject: "ShadowOnObject",
    component: <ObjectShadow/>,
    text: "Projeto para aprender e praticar colocação e organização de iluminação e de sombra.",
  },
  {
    id: "6",
    imgSrc: "./MotoFlu.gif",
    nameProject: "floatingObject",
    component:  <FloatingMotorbike/>,
    text: "Projeto para colocar objeto com movimento como se fosse um objeto em gravidade..",
  },
  {
    id: "7",
    imgSrc: "./choiceColor.gif",
    nameProject: "ChoiceColor",
    component:  <ChangingColors/>,
    text: "Projeto para poder alterar a cor de um elemento geografico 3D usando hook do react como createContext, useContext para carregar as props de color.",
  },
];