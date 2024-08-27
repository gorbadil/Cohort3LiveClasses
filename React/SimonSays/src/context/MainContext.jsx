// 1. Context Tanımlama
// 2. Context return değeri al
import { createContext, useState } from "react";
import sleep from "../helper/sleep";

const MainContext = createContext();

// 3. Context özelliğine sahip component oluştur
// 4. Component child propunu kullanır hale getir

function MainProvider({ children }) {
  const [compArr, setCompArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [turn, setTurn] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function userTurn() {
    if (userArr.length === 0) return;
    if (userArr.length === compArr.length) {
      if (JSON.stringify(userArr) === JSON.stringify(compArr)) {
        setScore((prev) => prev + 1);
        setUserArr([]);
        setTimeout(() => {
          computerTurn();
        }, 1000);
        setTurn((prev) => !prev);
      } else {
        setIsPlaying(false);
      }
    }
  }

  function computerTurn() {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    setCompArr((prev) => [...prev, randomNum]);
  }

  const handleStartGame = () => {
    setUserArr([]);
    setCompArr([]);
    setIsPlaying(true);
    computerTurn();
    setScore(0);
  };

  const playCompArr = async () => {
    for (let i = 0; i < compArr.length; i++) {
      const pad = document.getElementById(compArr[i]);
      await sleep();
      pad.classList.add("active");
      await sleep();
      pad.classList.remove("active");
    }
    if (compArr.length !== 0) {
      setTurn((prev) => !prev);
    }
  };

  const data = {
    compArr: compArr,
    setCompArr: setCompArr,
    userArr: userArr,
    setUserArr: setUserArr,
    turn: turn,
    setTurn: setTurn,
    score: score,
    setScore: setScore,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying,
    handleStartGame: handleStartGame,
    userTurn: userTurn,
    playCompArr: playCompArr,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}

// data kullanmak için çıktı
export default MainContext;

// Main.jsx sarmalamak için kullandım
export { MainProvider };

// export { MainProvider, MainContext };
