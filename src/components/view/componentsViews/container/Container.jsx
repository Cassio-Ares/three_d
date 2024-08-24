"use client";
import { useState } from "react";
import Link from "next/link";
import "./styles.css";

export const Container = ({imgSrc, nameProject, linkAcess}) => {
  const [showText, setShowText] = useState(false);// state que controla a visibilidade do texto
  const [mousePositionHover, setMousePositionHover] = useState({ x: 0, y: 0 }); //state que armazena as cordenadas x e y da posição do mouse

  //função que torna showText para true
  const handleMouseOver = () => { 
    setShowText(true);
  };

  //função que torna showText para false
  const handleMouseOut = () => {
    setShowText(false);
  };

  /**
   * 
   * @param {mouse passar sobre o container} event 
   */
  const handleMouseMove = (event) => {
    setMousePositionHover({
      x: event.clientX, // Retorna a posição horizontal do mouse em relação à janela do navegador.
      y: event.clientY, //  Retorna a posição vertical do mouse em relação à janela do navegador.
    });
  };

  return (
    <Link
      href={linkAcess || "#"} //To do
      className="container"
      onMouseOver={handleMouseOver} //onMouseOver evento de mouse
      onMouseOut={handleMouseOut}   // onMouseOut evento de mouse ambos usando suas funções handle para torna oculto ou visivel o texto
      onMouseMove={handleMouseMove} // onMouseMove evento que será ativado quando mouse se mover dentro do container
    >
      <div className="container-content">
        <img className="img" src={imgSrc} alt={nameProject} />
        {showText && (
          <div
            className="mouseText"
            style={{ top: mousePositionHover.y + 10, left: mousePositionHover.x + 10 }}
          >
            Clique e interaja com o projeto
          </div>
        )}
      </div>
    </Link>
  );
};
