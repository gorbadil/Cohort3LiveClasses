import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";

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

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
