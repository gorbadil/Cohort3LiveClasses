import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

function MainArea() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MainArea;
