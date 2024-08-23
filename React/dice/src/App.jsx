import { useState } from "react";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [player1Set, setPlayer1Set] = useState(false);
  const [player1Dice, setPlayer1Dice] = useState(0);
  const [player2Dice, setPlayer2Dice] = useState(0);
  const [result, setResult] = useState("");
  const [gameOn, setGameOn] = useState(false);

  const handleClick = () => {
    setGameOn(true);
    let rollDice = setInterval(() => {
      setPlayer1Dice(Math.floor(Math.random() * 6) + 1);
      setPlayer2Dice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollDice);
      const p1 = Math.floor(Math.random() * 6) + 1;
      const p2 = Math.floor(Math.random() * 6) + 1;

      setPlayer1Dice(p1);
      setPlayer2Dice(p2);

      if (p1 > p2) {
        setResult(`${player1} kazandı`);
      } else if (p1 < p2) {
        setResult(`${player2} kazandı`);
      } else {
        setResult("Berabere");
      }
      setGameOn(false);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Zar Atalım</h1>
      <div className="players">
        <div className="player">
          <input
            type="text"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            disabled={gameOn}
            onFocus={() => setPlayer1Set(true)}
            onBlur={() => setPlayer1Set(false)}
            className={player1Set ? "active" : ""}
          />
          <div className="dice"> {player1Dice} </div>
        </div>
        <div className="player">
          <input
            type="text"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            disabled={gameOn}
          />
          <div className="dice"> {player2Dice} </div>
        </div>
      </div>
      <button onClick={handleClick} disabled={gameOn}>
        {gameOn ? "Zar Atıldı" : "Zar At"}
      </button>
      <h3>Sonuç: {result}</h3>
    </div>
  );
}

export default App;
