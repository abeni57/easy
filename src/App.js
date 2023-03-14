import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Projects from "./routes/Projects";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import Oda_bultum from "./routes/project/oda_bultum";
import Office_building from "./routes/services/office_building";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/services/office_building" element={<Office_building />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/oda_bultum" element={<Oda_bultum />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
