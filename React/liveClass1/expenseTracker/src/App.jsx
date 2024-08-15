import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Inputs from "./components/Inputs/Inputs";
import ReactImage from "../public/maxresdefault.jpg";

function App() {
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");

  const [harcalamalar, setHarcalamalar] = useState([
    {
      isim: "Çiçek",
      tutar: 50,
    },
    {
      isim: "Ekmek",
      tutar: 10,
    },
  ]);

  const handleNewUser = () => {
    setUsername(usernameInput);
  };

  if (username === "") {
    return (
      <>
        <img src={ReactImage} width={300} alt="" />
        <h3>Adını Yazın</h3>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleNewUser}>Yeni Kullanıcı</button>
      </>
    );
  }

  return (
    <>
      <h3>Hoşgeldin {username}</h3>

      <h3>Harcama Takip</h3>
      <Inputs setHarcalamalar={setHarcalamalar} />
      <hr />
      <h4>Harcamalar</h4>
      <ul>
        {harcalamalar.map((item, index) => (
          <List key={`${item.isim}${index}`} item={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
