"use client";
import "./styles.css";
import { Btn_neon } from "../btn_neon/Btn_neon";

export const HomeView = () => {
  return (
    <div className="containerHome">
      <div className="title">
        <div className="container_title">
          <h1>Projeto para Estudo e Prática de Desenvolvimento 3D</h1>
        </div>
        <p>
          Este projeto está sendo criado para estudar, praticar e aprimorar meus
          conhecimentos em desenvolvimento 3D com THREE.js e react-three/fiber.
          Através dele, quero explorar desde o básico até técnicas avançadas,
          desenvolvendo elementos tridimensionais e animações para consolidar
          minhas habilidades nessa área.
        </p>
      </div>
      <div className="container_btn">
        <Btn_neon text_btn="Acesse e aproveite os projetos" />
      </div>
    </div>
  );
};
