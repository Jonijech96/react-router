import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const goToAbout = () => {
    navigate("/about");
  };
  const submit = (e) => {
    e.preventDefault();
    if (inputText === "manzana") {
      goToAbout();
    } else {
      alert("contraseña incorrecta");
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <form action="" onSubmit={submit}>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button>ir</button>
      </form>
    </div>
  );
};

export default Home;
