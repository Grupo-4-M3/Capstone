import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}

export default UserProvider;
