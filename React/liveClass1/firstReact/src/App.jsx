import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      name: "Huzeyfe",
      surname: "Şahin",
    },
    {
      name: "İrem",
      surname: "Özdemir",
      title: "Frontend Developer",
    },
    {
      name: "Oğuzhan",
      surname: "Aras",
    },
    {
      name: "Burak",
      surname: "Kaya",
    },
  ];

  // VanillaJS
  // let count = 0;

  // const handleClick = () => {
  //   count++;
  //   console.log(count);
  // };

  // React
  // const [count, setCount] = useState(0);
  // const count = 0
  // const handleClick = () => {
  //   setCount((prev) => prev + 1);
  // };

  // useState(param) => parametre değişkenin ilk değeri
  // useState => return [state, setState]

  // string değer ile saklama
  // const [stateName, setStateName] = useState("Seçilen İsim");
  // const [stateSurname, setStateSurname] = useState("Seçilen Soyisim");

  // object ile saklama
  const [choosen, setChoosen] = useState({
    name: "choosen name",
    surname: "choosen surname",
  });

  return (
    <div>
      {/* <h1>Seçilen</h1>
      <p>
        {stateName} {stateSurname}
      </p>
      <hr /> */}
      <h1>Choosen</h1>
      <p>
        {choosen.name} {choosen.surname}
      </p>
      <hr />
      {/* <h1>App JSX</h1> */}
      {/* <h1> {count} </h1> */}
      {/* <button onClick={handleClick}>1 Arttır</button> */}
      {/* {data.map((item, index) => (
        <FirstProp
          key={index}
          surname={item.surname}
          name={item.name}
          title={item.title}
        />
      ))} */}
      {/* <Name
        name="Huzeyfe"
        surname="Şahin"
        setStateName={setStateName}
        setStateSurname={setStateSurname}
      />
      <Name
        name="İrem"
        surname="Özdemir"
        setStateName={setStateName}
        setStateSurname={setStateSurname}
      />
      <Name
        name="Oğuzhan"
        surname="Aras"
        setStateName={setStateName}
        setStateSurname={setStateSurname}
      /> */}
      {/* {data.map((item, index) => (
        <Name
          key={index}
          name={item.name}
          surname={item.surname}
          // setStateName={setStateName}
          // setStateSurname={setStateSurname}
          setChoosen={setChoosen}
        />
      ))} */}
      {data.map((item, index) => (
        <p
          key={index}
          onClick={() => setChoosen({ name: item.name, surname: item.surname })}
        >
          {item.name} {item.surname}
        </p>
      ))}

      {/* <Five setFiveCount={setCount} /> */}

      {/* <h3>After First</h3> */}
    </div>
  );
}

// Component
// Prop => Parametre
// State

export default App;
