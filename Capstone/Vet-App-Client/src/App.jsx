import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import "./App.css";

const initialAnimal = {
  name: "",
  species: "",
  breed: "",
  gender: "",
  dateOfBirth: "",
  colour: "",
  customer: {
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  },
};

function App() {
  const [animal, setAnimal] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [update, setUpdate] = useState(false);
  const [newAnimal, setNewAnimal] = useState(initialAnimal);

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
    setUpdate(true);
  }, [update]);

  const handleNewAnimalInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newAnimal);
  };

  const handleNewAnimalCustomerSelect = (e) => {
    const { value } = e.target;
    const newAnimalCustomer = customer.find((cus) => cus.id === value);
    setNewAnimal((prev) => ({
      ...prev,
      customer: newAnimalCustomer,
    }));
    console.log(newAnimal);
  };

  const handleAddNewAnimalBtn = () => {
    axios
      .post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/animals", newAnimal)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        setUpdate(false);
        setNewAnimal(initialAnimal);
      });
  };

  return (
    <>
      <h1>Cohort3</h1>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        name="name"
        value={newAnimal.name}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Species"
        variant="standard"
        name="species"
        value={newAnimal.species}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Breed"
        variant="standard"
        name="breed"
        value={newAnimal.breed}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Gender"
        variant="standard"
        name="gender"
        value={newAnimal.gender}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <TextField
        id="standard-basic"
        // label="Date of Birth"
        type="date"
        variant="standard"
        name="dateOfBirth"
        value={newAnimal.dateOfBirth}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Colour"
        variant="standard"
        name="colour"
        value={newAnimal.colour}
        onChange={handleNewAnimalInputChange}
      />
      <br />
      <br />
      <Select
        name="customer"
        value={0}
        variant="standard"
        onChange={handleNewAnimalCustomerSelect}
      >
        <MenuItem value={0} disabled>
          Select Customer
        </MenuItem>
        {customer?.map((cus, index) => (
          <MenuItem key={`${index}customer`} value={cus.id}>
            {cus.name}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      <Button variant="contained" color="error" onClick={handleAddNewAnimalBtn}>
        Add New Animal
      </Button>
      <hr />
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
