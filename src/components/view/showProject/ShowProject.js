"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ComponentProjects } from "../../mock/projectBD.js";
import { Btn_neon } from "@/components/view/componentsViews/btn_neon/Btn_neon.jsx";

export const ShowProject = ({ id }) => {
  const [project, setProject] = useState(null);
  const [text, setText] = useState(null)

  useEffect(() => {
    if (id) {
      const project = ComponentProjects.find((proj) => proj.id === id);
      if (project) {
        setProject(project.component);
        setText(project.text)
      } else {
        console.error("Project not found for ID:", id);
      }
    }
  }, [id]);

  return (
    <>
      {project ? project : <p>Loading...</p>}
      <div className="contentText">
       {text ? text : <p>Loading...</p>}
      </div>
      <div className="contentBtn">
        <Btn_neon text_btn={"Retorne a galeria"} link={"/projects"} />
      </div>
    </>
  );
};
