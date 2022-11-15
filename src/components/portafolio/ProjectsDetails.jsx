import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  const { id } = useParams();
  return (
    <div>
      <h1>hola soy {id}</h1>
      <button onClick={goToBack}>ir Atras</button>
    </div>
  );
};

export default ProjectsDetails;
