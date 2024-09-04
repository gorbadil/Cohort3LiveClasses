import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(import.meta.env.VITE_APP_GLOBAL_VARIALBE);

  return (
    <>
      <h1>Cohort 3</h1>
      <div>
        {data?.users?.map((user, index) => (
          <div key={index}>
            <h3>
              {user.firstName} {user.lastName}{" "}
            </h3>
            <p>{user.role}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// fetch
// axios =>JS library

// .env => environment variable
// global variable
// kodları değiştirmeden değişkenleri değiştirebilmek

// backend => fetch url => değişebilir
// bu url ben env dosyasına yazıyorum

// variable
// var {}

// const {}
// let {}

// frontend localde iken env değişken => "Hello World"

// env değişken tanımlama iş
// kodda değişken tanımlama var, const, let
// serverda değişken tanımlama env

// url değiştirmek => devops => support serverda canlıya alıcak
// api_key => env dosyasına yazıyorum

// api_key => gizli olduğundan yazıyorum
