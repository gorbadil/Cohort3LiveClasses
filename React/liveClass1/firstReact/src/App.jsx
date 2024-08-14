import "./App.css";
import FirstProp from "./FirstProp";

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
  return (
    <div>
      <h1>App JSX</h1>

      {data.map((item, index) => (
        <FirstProp
          key={index}
          surname={item.surname}
          name={item.name}
          title={item.title}
        />
      ))}

      <h3>After First</h3>
    </div>
  );
}

// Component
// Prop => Parametre
// State

export default App;
