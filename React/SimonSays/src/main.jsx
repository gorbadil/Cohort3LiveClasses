import { createRoot } from "react-dom/client";
import { MainProvider } from "./context/MainContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <MainProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </MainProvider>
);

// <MainContext.Provider>
//     <App />
// </MainContext.Provider>
