import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [animal, setAnimal] = useState([]);
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/animals")
      .then((res) => {
        setAnimal(res.data.content);
      });
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/customers")
      .then((res) => {
        setCustomer(res.data.content);
      });
  }, []);
  return (
    <>
      <h1>Cohort3</h1>
      <input type="text" name="name" placeholder="Animal Name" />
      <br />
      <input type="text" name="species" />
      <br />
      <input type="text" name="breed" />
      <br />
      <input type="text" name="gender" />
      <br />
      <input type="text" name="dateOfBirth" />
      <br />
      <input type="text" name="colour" />
      <br />
      <select name="customer" id="customer" value={""}>
        <option value="" disabled>
          Select Customer
        </option>
        {customer?.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {animal?.map((item, index) => (
        <ul key={index}>
          <li>
            {" "}
            {item.name} {item?.customer?.name}{" "}
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
