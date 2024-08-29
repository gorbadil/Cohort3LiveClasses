import "./App.css";
import MainArea from "./MainArea";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <Navbar />
      </header>
      <div className="main-area">
        <MainArea />
      </div>
    </>
  );
}

export default App;
