import UserProvider from "./user";

function Providers({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;
