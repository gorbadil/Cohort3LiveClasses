import { useState, useEffect, useContext } from "react";
import "./App.css";
import NotPlaying from "./components/NotPlaying";
import Playing from "./components/Playing";
import MainContext from "./context/MainContext";

function App() {
  const {
    compArr,
    userArr,
    setUserArr,
    turn,
    score,
    isPlaying,
    userTurn,
    playCompArr,
    sleep,
  } = useContext(MainContext);

  useEffect(() => {
    playCompArr();
  }, [compArr]);

  useEffect(() => {
    userTurn();
  }, [userArr]);

  const handleClick = async (e) => {
    const id = parseInt(e.target.id);
    setUserArr((prev) => [...prev, id]);
    const pad = document.getElementById(id);
    pad.classList.add("active");
    await sleep();
    pad.classList.remove("active");
  };

  return (
    <div className="App">
      {isPlaying && <h3> {turn ? "Sıra sende" : "Sıra Simon'da"} </h3>}
      <h3> En Yüksek Puan: {score} </h3>
      {isPlaying ? <Playing handleClick={handleClick} /> : <NotPlaying />}
    </div>
  );
}

export default App;
