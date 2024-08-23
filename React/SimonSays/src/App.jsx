import { useState, useEffect } from "react";
import "./App.css";

const boardItem = [
  { id: 1, name: "green" },
  { id: 2, name: "blue" },
  { id: 3, name: "red" },
  { id: 4, name: "yellow" },
];

function sleep(ms = 500) {
  return new Promise((res) => setTimeout(res, ms));
}

function App() {
  const [compArr, setCompArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [turn, setTurn] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    computerTurn();
  }, []);

  function computerTurn() {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    setCompArr((prev) => [...prev, randomNum]);
  }

  useEffect(() => {
    const playCompArr = async () => {
      for (let i = 0; i < compArr.length; i++) {
        const pad = document.getElementById(compArr[i]);
        pad.classList.add("active");
        await sleep();
        pad.classList.remove("active");
        await sleep();
      }
      if (compArr.length !== 0) {
        setTurn((prev) => !prev);
      }
    };
    playCompArr();
  }, [compArr]);

  useEffect(() => {
    console.log("user:" + JSON.stringify(userArr));
    console.log("comp:" + JSON.stringify(compArr));
    if (userArr.length === 0) return;
    if (userArr.length === compArr.length) {
      if (JSON.stringify(userArr) === JSON.stringify(compArr)) {
        setScore((prev) => prev + 1);
        setUserArr([]);
        setTimeout(() => {
          computerTurn();
        }, 1000);
        setTurn((prev) => !prev);
      }
    }
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
      <h3> {turn ? "Sıra sende" : "Sıra Simon'da"} </h3>
      <h3> Puan: {score} </h3>
      <div className="board">
        <div className="pads">
          {boardItem.map((gicirgicir) => (
            // let = 0; i < arr.length; i++
            // arr.map (arr[i], i, arr)
            // return => array
            <div
              key={gicirgicir.name}
              id={gicirgicir.id}
              className={`pad ${gicirgicir.name}`}
              onClick={handleClick}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
