import { useContext } from "react";
import MainContext from "../context/MainContext";
import UserContext from "../context/UserContext";

function NotPlaying() {
  const { handleStartGame } = useContext(MainContext);
  const data = useContext(UserContext);
  return (
    <div>
      <h3>Simon Game</h3>
      <p> {data} </p>
      <button onClick={handleStartGame}>Click To Start</button>
    </div>
  );
}

export default NotPlaying;
