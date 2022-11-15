import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolore
        quisquam? Veniam quibusdam impedit quam eius sunt aspernatur,
        perferendis provident quo numquam in iste eum laudantium necessitatibus
        dolorem perspiciatis? Maiores!
      </p>
      <button onClick={goToBack}>ir Atras</button>
    </div>
  );
};

export default About;
