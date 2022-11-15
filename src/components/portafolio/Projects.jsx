import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const goToAbout = () => {
    navigate(`/projects/${inputText}`);
  };
  const submit = () => {
    goToAbout();
  };
  return (
    <div>
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="ingrese id del proyecto"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={submit}>ir</button>
    </div>
  );
};

export default Projects;
