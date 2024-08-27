import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const data = "Bu UserContext'ten geldi";
  return <UserContext.Provider value={data}> {children} </UserContext.Provider>;
}

export default UserContext;

export { UserProvider };
