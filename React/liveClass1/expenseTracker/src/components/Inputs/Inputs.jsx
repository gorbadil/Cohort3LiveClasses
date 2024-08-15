import { useState } from "react";
import "./Inputs.css";

function Inputs({ setHarcalamalar }) {
  const [alert, setAlert] = useState(false);
  const [harcama, setHarcama] = useState({
    isim: "",
    tutar: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHarcama((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    setHarcalamalar((prev) => [
      ...prev,
      {
        isim: harcama.isim,
        tutar: harcama.tutar,
      },
    ]);
    setHarcama({
      isim: "",
      tutar: "",
    });
  };

  return (
    <div>
      <p>Harcama Adı</p>
      <input
        type="text"
        name="isim"
        value={harcama.isim}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <p>Harcama Tutarı</p>
      <input
        type="number"
        name="tutar"
        value={harcama.tutar}
        onChange={(e) => handleChange(e)}
      />

      <br />
      <br />
      <button onClick={handleClick} className={alert ? "red" : ""}>
        Harca
      </button>

      {alert ? <p>Harcama Eklendi</p> : <p>Harcama Ekle</p>}

      {/* {alert && <p>Harcama Eklendi</p>} */}
    </div>
  );
}

export default Inputs;
