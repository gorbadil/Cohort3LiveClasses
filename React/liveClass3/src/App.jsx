import { useState, useReducer, useRef } from "react";
import "./App.css";

function reducerStateFunc(state, action) {
  switch (action.type) {
    case "arttır":
      return state + 1;
    case "azalt":
      return state - 1;
    default:
      return state;
  }
}

const initialState = 0;

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (e) => {
    const { id } = e.target;
    switch (id) {
      case "arttır":
        setCount((prev) => prev + 1);
        break;
      case "azalt":
        setCount((prev) => prev - 1);
        break;
      default:
        break;
    }
  };

  const [reducerCount, reducerSetCount] = useReducer(
    reducerStateFunc,
    initialState
  );

  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <div>
        <h2>useState Counter</h2>
        <p> {count} </p>
        <button id="arttır" onClick={handleSetCount}>
          Arttır
        </button>

        <button id="azalt" onClick={handleSetCount}>
          Azalt
        </button>
      </div>
      <div>
        <h2>useReducer Counter</h2>
        <p> {reducerCount} </p>
        <button onClick={() => reducerSetCount({ type: "arttır" })}>
          Reducer Arttır
        </button>
        <button onClick={() => reducerSetCount({ type: "azalt" })}>
          Reducer Azalt
        </button>
      </div>
      <div>
        <input type="text" ref={inputRef} onChange={handleInputChange} />
        <button onClick={() => console.log("direk çalıştı")}>Focus</button>
      </div>
    </>
  );
}

export default App;
