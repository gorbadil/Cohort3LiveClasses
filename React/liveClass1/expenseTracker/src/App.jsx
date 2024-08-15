import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  // const [harcamaAdi, setHarcamaAdi] = useState("");
  // const [harcamaTutari, setHarcamaTutari] = useState();
  const [harcama, setHarcama] = useState({
    isim: "",
    tutar: "",
  });
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
  const handleClick = () => {
    setHarcalamalar((prev) => [
      ...prev,
      {
        // isim: harcamaAdi,
        // tutar: harcamaTutari,
        isim: harcama.isim,
        tutar: harcama.tutar,
      },
    ]);
    // setHarcamaAdi("");
    // setHarcamaTutari("");
    setHarcama({
      isim: "",
      tutar: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHarcama((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h3>Harcama Takip</h3>
      <p>Harcama Adı</p>
      <input
        type="text"
        name="isim"
        // value={harcamaAdi}
        value={harcama.isim}
        // onChange={(e) => setHarcamaAdi(e.target.value)}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <p>Harcama Tutarı</p>
      <input
        type="number"
        name="tutar"
        // value={harcamaTutari}
        value={harcama.tutar}
        // onChange={(e) => setHarcamaTutari(e.target.value)}
        onChange={(e) => handleChange(e)}
      />
      {/* <InputComp /> */}
      <br />
      <button onClick={handleClick}>Harca</button>
      <hr />
      <h4>Harcamalar</h4>
      <ul>
        {/* {harcalamalar.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.isim} </span>
              <span>{item.tutar} TL</span>
            </li>
          );
        })} */}
        {harcalamalar.map((item, index) => (
          // <li key={index} id={index}>
          //   <span>{item.isim} </span>
          //   <span>{item.tutar} TL</span>
          // </li>
          <List key={index} item={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
