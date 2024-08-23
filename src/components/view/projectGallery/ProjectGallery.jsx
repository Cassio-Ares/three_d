"use client";
import "./styles.css";
import { Btn_neon } from "@/components/btn_neon/Btn_neon";
import { Container } from "@/components/container/Container";

export const ProjectGallery = () => {
  return (
    <div className="containerGallery">
      <div className="containerGalleryTitle">
        <h1 className="title">Descubra a Magia do 3D com React Three Fiber</h1>
      </div>
      <div className="containerGalleryText">
        <p>
          Bem-vindo à minha galeria de projetos em React Three Fiber! Aqui, você
          encontrará uma coleção de criações 3D interativas, projetadas para
          explorar e dominar o poder do @react-three/fiber. Cada projeto é
          meticulosamente desenvolvido com explicações detalhadas e comentários
          no código, permitindo que você aprenda enquanto navega.
        </p>
        <p>
          Seja você um iniciante ou um desenvolvedor experiente, meu repositório
          no GitHub oferece um passo a passo completo para que você possa seguir
          e entender cada aspecto do código. Aproveite os projetos, aprenda no
          seu ritmo e sinta-se à vontade para usar o que encontrar em seus
          próprios trabalhos.
        </p>
        <div className="btnGalery">
          <Btn_neon
            text_btn={"Repositório three.js"}
            link={"https://github.com/Cassio-Ares"}
          />

          <Btn_neon
            text_btn={"Repositório react-three/fiber"}
            link={"https://github.com/Cassio-Ares"}
          />
        </div>
      </div>
      <div className="contentGallery">
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
      </div>
    </div>
  );
};
