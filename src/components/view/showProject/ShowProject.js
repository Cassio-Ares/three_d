"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ComponentProjects } from "../../mock/projectBD.js";
import { Btn_neon } from "@/components/view/componentsViews/btn_neon/Btn_neon.jsx";

export const ShowProject = ({ id }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    if (id) {
      const project = ComponentProjects.find((proj) => proj.id === id);
      if (project) {
        setProject(project.component);
      } else {
        console.error("Project not found for ID:", id);
      }
    }
  }, [id]);

  return (
    <>
      {project}
      <div className="contentBtn">
        <Btn_neon text_btn={"Retorne a galeria"} link={"/projects"} />
      </div>
    </>
  );
};
