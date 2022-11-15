import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/portafolio/Home";
import Technology from "./components/portafolio/Technology";
import Projects from "./components/portafolio/Projects";
import About from "./components/portafolio/About";
import ProjectsDetails from "./components/portafolio/ProjectsDetails";
// import About from './components/About'
// import Team from './components/Team'
// import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <div className="App">
        <nav>
          <ul style={{ display: "flex", gap: "2rem" }}>
            <li>
              <Link to="/">Ir al Home</Link>
            </li>
            <li>
              <Link to="/about">Ir al About</Link>
            </li>
            <li>
              <Link to="/technologies">Ir al technologies</Link>
            </li>
            <li>
              <Link to="/projects">Ir al projects</Link>
            </li>
          </ul>
        </nav>
        <header>Este es el header</header>
        <Routes>
          {/* <Route path='/about' element={<About />}/> */}
          <Route path="/projects/:id" element={<ProjectsDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technology />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <footer>creado con ♥ en Academlo</footer>
      </div>
    </HashRouter>
  );
}

export default App;
