import AppRoutes from "./components/Routes/Routes";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(false);
  const handleSignIn = () => {
    localStorage.setItem("user", "true");
    const curentLocalStorage = localStorage.getItem("user");
    setUser(curentLocalStorage);
  };
  return <AppRoutes user={user} onAuthButtonClick={handleSignIn} />
};

export default App;
